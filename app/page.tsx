'use client';
import React from 'react';
import Image from 'next/image';
import { useWindowSize } from '@uidotdev/usehooks';
import DragElements from '@/components/fancy/drag-elements';

const urls = [
	'https://images.unsplash.com/photo-1606021643583-b707947f1f02?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const randomInt = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Home: React.FC = () => {
	const screenSize = useWindowSize();
	return (
		<main className='w-full h-full relative bg-background'>
			<section className='w-full h-screen relative bg-background'>
				<h1 className='absolute text-xl md:text-4xl md:ml-36 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-muted-foreground uppercase w-full'>
					Every ticket tells a
					<span className='font-bold text-foreground dark:text-foreground'>
						{' '}
						story{' '}
					</span>
				</h1>
				<DragElements dragMomentum={true} className='p-10'>
					{urls.map((url, index) => {
						const rotation = randomInt(-12, 12);
						const width =
							(screenSize.width ?? 0 < 768)
								? randomInt(160, 180)
								: randomInt(120, 150);
						const height =
							(screenSize.width ?? 0 < 768)
								? randomInt(160, 180)
								: randomInt(150, 180);

						return (
							<div
								key={index}
								className={`flex items-start justify-center bg-white shadow-2xl p-4`}
								style={{
									transform: `rotate(${rotation}deg)`,
									width: `${width}px`,
									height: `${height}px`,
								}}
							>
								<div
									className={`relative overflow-hidden`}
									style={{
										width: `${width - 4}px`,
										height: `${height - 30}px`,
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
			<section className='w-full h-screen relative bg-background mt-10 scroll-snap-start'>
				<h1>MOre on this</h1>
			</section>
		</main>
	);
};

export default Home;
