'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
export default function SetupProfile() {
	const [username, setUsername] = useState('');
	const [fullName, setFullName] = useState('');
	const [bio, setBio] = useState('');
	const [loading, setLoading] = useState(false);
	const [userId, setUserId] = useState<string | null>(null);
	const router = useRouter();
	const supabase = createClient();

	// Ensure user is only fetched client-side
	useEffect(() => {
		const fetchUser = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			if (user) {
				setUserId(user.id);
			} else {
				alert('You must be logged in.');
				router.push('/sign-in');
			}
		};
		fetchUser();
	}, [supabase, router]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		if (!userId) return; // Prevent form submission if no user

		const { error } = await supabase.from('profiles').insert({
			id: userId,
			username,
			full_name: fullName,
			bio,
		});

		if (error) {
			alert(error.message);
		} else {
			router.push(`/profile/${username}`);
		}

		setLoading(false);
	};

	return (
		<div className='max-w-lg px-4 md:px-auto py-8 w-screen'>
			<h1 className='text-2xl font-semibold mb-4'>Set Up Your Profile</h1>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<Input
					type='text'
					placeholder='Username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className='input'
					required
				/>
				<Input
					type='text'
					placeholder='Full Name'
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
					className='input'
				/>
				<Textarea
					placeholder='Tell us about yourself'
					value={bio}
					onChange={(e) => setBio(e.target.value)}
					className='input'
				/>
				<Button type='submit' disabled={loading}>
					{loading ? 'Saving...' : 'Save & Continue'}
				</Button>
			</form>
		</div>
	);
}
