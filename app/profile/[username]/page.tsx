import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
export default async function ProfilePage({
	params,
}: {
	params: Promise<{ username: string }>;
}) {
	const supabase = await createClient();
	const { username } = await params;
	const { data: profile, error } = await supabase
		.from('profiles')
		.select('*')
		.eq('username', username)
		.single();

	if (error || !profile) {
		return (
			<div className='w-full h-screen flex items-center justify-center'>
				<h1 className='text-xl text-red-500'>User not found</h1>
			</div>
		);
	}

	return (
		<div className='max-w-4xl mx-auto py-8'>
			<div className='flex flex-col items-center mb-8'>
				<Image
					src={profile.avatar_url || '/assets/avatar.png'}
					alt={`${profile.username}'s avatar`}
					className='w-24 h-24 rounded-full object-cover mb-4 border-4 border-foreground drop-shadow-lg'
					width={96}
					height={96}
				/>
				<h1 className='text-2xl font-semibold'>{profile.username}</h1>
				<p className='text-gray-500'>{profile.bio || 'No bio available'}</p>
			</div>
			<div>
				<h2 className='text-xl font-semibold mb-4'>User Details</h2>
				<ul>
					<li>
						<strong>Full Name:</strong> {profile.full_name || 'N/A'}
					</li>
					<li>
						<strong>Joined:</strong>{' '}
						{new Date(profile.created_at).toLocaleDateString()}
					</li>
				</ul>
			</div>
		</div>
	);
}
