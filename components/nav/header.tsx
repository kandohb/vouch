import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { NavBar } from '../ui/tubelight-navbar';

export default async function Header() {
	const supabase = await createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const navItems = user
		? [
				{ name: 'Home', url: '/' },
				{ name: 'Profile', url: '/profile' },
				{ name: 'Logout', url: '/logout' }, // No `onClick` here
			]
		: [
				{ name: 'Home', url: '/' },
				{ name: 'About', url: '/about' },
				{ name: 'Login', url: '/sign-in' },
				{ name: 'Sign Up', url: '/sign-up' },
			];

	return <NavBar items={navItems} />;
}
