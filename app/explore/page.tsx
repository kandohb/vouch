import React from 'react';

export default function Explore() {
	return (
		<main className='w-full h-full flex flex-col gap-1 px-2 md:px-0'>
			<section className='flex flex-col gap-4' id='explore-header'>
				<div className='flex flex-col gap-4'>
					<h1 className='text-2xl font-medium md:text-6xl'>Explore</h1>
					<p className='text-sm text-foreground'>
						Explore events and tickets from around the world
					</p>
				</div>
			</section>
		</main>
	);
}
