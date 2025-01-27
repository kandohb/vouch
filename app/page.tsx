'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useWindowSize } from '@uidotdev/usehooks';
import DragElements from '@/components/fancy/drag-elements';
import { Card } from '@/components/ui/homecards';
import { BookOpenCheck, Zap, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Testimonials } from '@/components/ui/testimonials';
import Footer from '@/components/nav/footer';

const urls = [
	'https://beuw6r12zz.ufs.sh/f/cEyWJRCaFWGzjIVq9EeCMjRKkNHtbxPgXw3lSp2OmQyZG4Td',
	'https://beuw6r12zz.ufs.sh/f/cEyWJRCaFWGzte30Uvqf08OHpN9bKRrDc75Wa63whjP2SElT',
	'https://beuw6r12zz.ufs.sh/f/cEyWJRCaFWGzwIVHiwTPvJGLabWrUKf18Qwgq5MmXkBxRlo6',
	'https://beuw6r12zz.ufs.sh/f/cEyWJRCaFWGznKTIUNUupi9SzdjPQgOXbmwVrfFHWe0CcTvB',
	'https://beuw6r12zz.ufs.sh/f/cEyWJRCaFWGz0jHDom47mzbT6xwQPgXdNWj12tlG35CZUsnL',
	'https://beuw6r12zz.ufs.sh/f/cEyWJRCaFWGzOyU0mtubSMue5oac3ryfFIY0QNVhCmAxqjdv',
	'https://beuw6r12zz.ufs.sh/f/cEyWJRCaFWGzwibMVNTPvJGLabWrUKf18Qwgq5MmXkBxRlo6',
	'https://beuw6r12zz.ufs.sh/f/cEyWJRCaFWGziUhLWNs5gPz0nGtvaMT83jYEm2XUWd19yBR4',
];

const cardContent = {
	title: 'Verified & Trusted',
	description:
		'Every ticket you purchase is verified for authenticity, giving you peace of mind. Say goodbye to scams and hello to secure access to your favorite events!',
};

const cardContent1 = {
	title: 'Effortless and Seamless',
	description:
		"From browsing to checkout, we've designed every step to be easy, fast, and frustration-free. Your next unforgettable experience is just a few taps away!",
};

const cardContent2 = {
	title: 'The Best Events, All in One Place',
	description:
		"Discover concerts, festivals, and experiences you'll love. We bring all your favorite events together so you never miss a moment!",
};

const randomInt = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Home: React.FC = () => {
	const screenSize = useWindowSize();
	const [randomStyles, setRandomStyles] = useState<
		{ rotation: number; width: number; height: number }[]
	>([]);
	const router = useRouter();
	// Generate random styles after hydration
	useEffect(() => {
		const styles = urls.map(() => {
			const rotation = randomInt(-12, 12);
			const width =
				(screenSize.width ?? 0) < 768
					? randomInt(180, 200) // Mobile: Slightly larger
					: randomInt(200, 240); // Desktop: Larger range
			const height =
				(screenSize.width ?? 0) < 768
					? randomInt(200, 220)
					: randomInt(240, 280);
			return { rotation, width, height };
		});
		setRandomStyles(styles);
	}, [screenSize.width]);

	return (
		<main className='w-full h-full relative bg-background'>
			<section className='w-full h-screen relative bg-background scroll-snap-start'>
				<h1 className='absolute text-2xl md:text-6xl md:ml-36 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-muted-foreground uppercase w-full'>
					Every ticket tells a
					<span className='font-bold text-foreground dark:text-foreground'>
						{' '}
						story{' '}
					</span>
				</h1>
				<p className='absolute text-xs md:text-sm md:ml-36 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-muted-foreground w-full mt-10'>
					(Grab a memory)
				</p>
				<DragElements dragMomentum={true} className='p-10'>
					{urls.map((url, index) => {
						const style = randomStyles[index];
						if (!style) return null; // Wait for styles to generate
						return (
							<div
								key={index}
								className={`flex items-start justify-center bg-white shadow-2xl p-4`}
								style={{
									transform: `rotate(${style.rotation}deg)`,
									width: `${style.width}px`,
									height: `${style.height}px`,
								}}
							>
								<div
									className={`relative overflow-hidden`}
									style={{
										width: `${style.width - 4}px`,
										height: `${style.height - 30}px`,
									}}
								>
									<Image
										src={url}
										fill
										alt={`Analog photo ${index + 1}`}
										className='object-cover'
										draggable={false}
									/>
								</div>
							</div>
						);
					})}
				</DragElements>
			</section>
			<section className='w-screen h-screen relative bg-background mt-10 scroll-snap-start items-center justify-center mb-96 md:mb-0'>
				<h1 className='text-2xl md:text-6xl text-center text-foreground w-full font-bold'>
					Why Should You Choose Us?
				</h1>
				<div className='flex flex-col md:flex-row gap-0 items-center justify-center mt-10 px-10 md:px-0'>
					<Card
						variant='plus'
						{...cardContent}
						icon={<BookOpenCheck size={40} className='text-foreground' />}
						className='max-w-[400px] bg-background h-[400px]'
					/>
					<Card
						variant='plus'
						{...cardContent1}
						className='max-w-[400px] bg-background h-[400px]'
						icon={<Zap size={40} className='text-foreground' />}
					/>
					<Card
						variant='plus'
						{...cardContent2}
						className='max-w-[400px] bg-background h-[400px]	'
						icon={<PartyPopper size={40} className='text-foreground' />}
					/>
				</div>
				{/* Get Started Button */}
				<div className='flex items-center justify-center mt-10'>
					<Button
						variant='default'
						className='px-6 py-3 text-lg font-medium p-10 shadow-md  z-[1000] rounded-full'
						onClick={() => router.push('/explore')}
					>
						Get Started
					</Button>
				</div>
			</section>
			<section className='w-screen h-screen bg-background mt-10 scroll-snap-start items-center justify-center mb-96 hidden md:block'>
				<div className='block'>
					<Testimonials />
				</div>
			</section>
			<Footer />
		</main>
	);
};

export default Home;
