import React from 'react';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PartyPopper, Disc3, Music, Building2 } from 'lucide-react';
import Image from 'next/image';

export default function Explore() {
	return (
		<main className='w-screen h-full flex flex-col gap-1 px-4 mb-48'>
			<section className='flex flex-col gap-4' id='explore-header'>
				<div className='w-full flex flex-col md:flex-row gap-4'>
					<Input
						className='w-full md:w-1/3 bg-background text-foreground text-lg border-foreground rounded-full'
						placeholder='Search for events'
					/>
					<Button className='w-1/2 md:w-1/4 bg-background text-foreground text-lg border-foreground rounded-full border-2'>
						Add An Event
					</Button>
				</div>
				<ul className='w-full flex flex-row gap-10 mt-5 overflow-x-scroll'>
					<li className='flex flex-col gap-4 justify-center items-center'>
						<Button className='h-16 w-16 bg-background text-foreground rounded-full border-2 border-foreground'>
							<Disc3 className='w-12 h-12 hover:text-green-500' />
						</Button>
						<p className='text-xl text-foreground text-center'>Concert</p>
					</li>
					<li className='flex flex-col gap-4 justify-center items-center'>
						<Button className='h-16 w-16 bg-background text-foreground rounded-full border-2 border-foreground'>
							<Music className='w-12 h-12 hover:text-green-500' />
						</Button>
						<p className='text-xl text-foreground text-center'>Festival</p>
					</li>
					<li className='flex flex-col gap-4 justify-center items-center'>
						<Button className='h-16 w-16 bg-background text-foreground rounded-full border-2 border-foreground'>
							<Building2 className='w-12 h-12 hover:text-green-500' />
						</Button>
						<p className='text-xl text-foreground text-center'>Networking</p>
					</li>
					<li className='flex flex-col gap-4 justify-center items-center'>
						<Button className='h-16 w-16 bg-background text-foreground rounded-full border-2 border-foreground'>
							<PartyPopper className='w-12 h-12 hover:text-green-500' />
						</Button>
						<p className='text-xl text-foreground text-center'>Party</p>
					</li>
				</ul>
			</section>
			<section className='w-full flex flex-col gap-5 mt-10 md:mt-20'>
				<h1 className='text-2xl font-bold text-foreground md:text-4xl'>
					Popular Events
				</h1>
				<ul className='w-full grid grid-cols-1 md:grid-cols-3 gap-10'>
					<li className='w-full bg-background text-foreground rounded-lg justify-start items-start'>
						<Card className='w-full h-full drop-shadow-xl'>
							<CardContent className='flex flex-col'>
								<Image
									src='/assets/avatar.png'
									alt='Event Image'
									width={500}
									height={500}
									className='w-full h-full object-cover rounded-lg'
								/>
							</CardContent>
							<CardFooter className='flex flex-col items-start text-left bg-background rounded-xl'>
								<p className='text-2xl font-bold text-foreground'>
									Amapiano Nightlife
								</p>
								<p className='text-sm text-foreground font-bold'>
									Friday, Dec 18 | 8:00 PM
								</p>
								<p className='text-sm text-foreground'>Osu, Accra</p>
								<p className='text-sm text-foreground'>
									123 Kukurantumi Street
								</p>
								<p className='text-sm text-foreground'>Midnight Club</p>
								<p className='text-sm font-bold text-foreground'>Free</p>
								<p className='text-sm text-foreground/50'>50 tickets left</p>
							</CardFooter>
						</Card>
					</li>
					<li className='w-full bg-background text-foreground rounded-lg justify-start items-start'>
						<Card className='w-full h-full drop-shadow-xl'>
							<CardContent className='flex flex-col'>
								<Image
									src='/assets/avatar.png'
									alt='Event Image'
									width={500}
									height={500}
									className='w-full h-full object-cover rounded-lg'
								/>
							</CardContent>
							<CardFooter className='flex flex-col items-start text-left bg-background rounded-xl'>
								<p className='text-2xl font-bold text-foreground'>
									Amapiano Nightlife
								</p>
								<p className='text-sm text-foreground font-bold'>
									Friday, Dec 18 | 8:00 PM
								</p>
								<p className='text-sm text-foreground'>Osu, Accra</p>
								<p className='text-sm text-foreground'>
									123 Kukurantumi Street
								</p>
								<p className='text-sm text-foreground'>Midnight Club</p>
								<p className='text-sm font-bold text-foreground'>Free</p>
								<p className='text-sm text-foreground/50'>50 tickets left</p>
							</CardFooter>
						</Card>
					</li>
				</ul>
			</section>
		</main>
	);
}
