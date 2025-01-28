'use client';

import { useEffect, useState } from 'react';
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/testimonials';

function Testimonials() {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setTimeout(() => {
			if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
				setCurrent(0);
				api.scrollTo(0);
			} else {
				api.scrollNext();
				setCurrent(current + 1);
			}
		}, 4000);
	}, [api, current]);

	return (
		<div className='w-full'>
			<div className='container mx-auto'>
				<div className='flex flex-col gap-10'>
					<h2 className='text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-bold text-left'>
						What Our Users Say
					</h2>
					<Carousel setApi={setApi} className='w-full'>
						<CarouselContent>
							{testimonials.map((testimonial, index) => (
								<CarouselItem className='lg:basis-1/2' key={index}>
									<div className='bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col'>
										<div className='flex flex-col gap-4'>
											<div className='flex flex-col'>
												<h3 className='text-xl tracking-tight'>
													{testimonial.title}
												</h3>
												<p className='text-muted-foreground max-w-xs text-base'>
													{testimonial.feedback}
												</p>
											</div>
											<p className='flex flex-row gap-2 text-sm items-center'>
												<Avatar className='h-6 w-6'>
													<AvatarImage src={testimonial.avatar} />
													<AvatarFallback>
														{testimonial.name
															.split(' ')
															.map((word) => word[0])
															.join('')}
													</AvatarFallback>
												</Avatar>
												<span>{testimonial.name}</span>
											</p>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</div>
	);
}

export { Testimonials };
