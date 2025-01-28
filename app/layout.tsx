import HeaderAuth from '@/components/header-auth';
import Footer from '@/components/nav/footer';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Geist } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Link from 'next/link';
import './globals.css';
import Header from '@/components/nav/header';

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: 'http://localhost:3000';

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: 'Vouch',
	description: 'A ticketing app for the modern age',
};

const geistSans = Geist({
	display: 'swap',
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={geistSans.className} suppressHydrationWarning>
			<body className='bg-background text-foreground'>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<main className='min-h-screen flex flex-col'>
						<div className='flex-1 w-full flex flex-col'>
							<nav className='w-full flex h-16'>
								{/* Container */}
								<div className='w-full flex justify-between items-center px-4 max-w-screen-xl mx-auto'>
									{/* Left Section: Vouch */}
									<div className='flex items-center font-semibold'>
										<Link href='/'>Vouch</Link>
									</div>
									<div className='flex gap-5 items-center'>
										<Header />
										<ThemeSwitcher />
									</div>
								</div>
							</nav>
							<div className='flex flex-col w-full items-center max-w-7xl mx-auto pt-10'>
								{children}
							</div>
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
