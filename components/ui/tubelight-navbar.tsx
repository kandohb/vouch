'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, User, Building2, LogIn, UserPlus, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
	name: string;
	url: string;
}

interface NavBarProps {
	items: NavItem[];
	className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
	const [activeTab, setActiveTab] = useState(items[0]?.name || ''); // Handle case where items might be empty
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Icon map to dynamically assign icons
	const iconMap: Record<
		string,
		React.ComponentType<{ size: number; strokeWidth: number }>
	> = {
		Home,
		Profile: User,
		About: Building2,
		Login: LogIn,
		'Sign Up': UserPlus,
		Logout: LogOut,
	};

	const handleLogout = async () => {
		const { createClient } = await import('@/utils/supabase/client');
		const supabase = createClient();
		await supabase.auth.signOut();
		location.reload(); // Refresh the page to reflect signed-out state
	};

	return (
		<div
			className={cn(
				'fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6',
				className
			)}
		>
			<div className='flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg'>
				{items.map((item) => {
					const Icon = iconMap[item.name]; // Get the icon from the map
					const isActive = activeTab === item.name;

					const isLogout = item.name === 'Logout';

					return (
						<Link
							key={item.name}
							href={isLogout ? '#' : item.url} // Prevent navigation for logout
							onClick={isLogout ? handleLogout : () => setActiveTab(item.name)}
							className={cn(
								'relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors',
								'text-foreground/80 hover:text-primary',
								isActive && 'bg-muted text-primary'
							)}
						>
							<span className='hidden md:inline'>{item.name}</span>
							<span className='md:hidden flex flex-col items-center'>
								{Icon && <Icon size={18} strokeWidth={2.5} />}
								<span className='text-xs text-center text-muted-foreground/50 text-nowrap'>
									{item.name}
								</span>
							</span>
							{isActive && (
								<motion.div
									layoutId='lamp'
									className='absolute inset-0 w-full bg-primary/5 rounded-full -z-10'
									initial={false}
									transition={{
										type: 'spring',
										stiffness: 300,
										damping: 30,
									}}
								>
									<div className='absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full'>
										<div className='absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2' />
										<div className='absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1' />
										<div className='absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2' />
									</div>
								</motion.div>
							)}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
