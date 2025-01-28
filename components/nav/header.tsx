import { createClient } from '@/utils/supabase/server';
import { NavBar } from '../ui/tubelight-navbar';

export default async function Header() {
	const supabase = await createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	let navItems = [
		{ name: 'Home', url: '/' },
		{ name: 'About', url: '/about' },
	];

	if (user) {
		// Fetch the username from the profiles table
		const { data: profile, error } = await supabase
			.from('profiles')
			.select('username')
			.eq('id', user.id)
			.single();

		const username = profile?.username ?? 'profile'; // Fallback in case it's null

		navItems = [
			{ name: 'Home', url: '/' },
			{ name: 'Explore', url: '/explore' },
			{ name: 'Profile', url: `/profile/${username}` },
			{ name: 'Logout', url: '/logout' }, // Logout will be handled elsewhere
		];
	} else {
		navItems.push(
			{ name: 'Login', url: '/sign-in' },
			{ name: 'Sign Up', url: '/sign-up' }
		);
	}

	return <NavBar items={navItems} />;
}
