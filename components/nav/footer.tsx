import React from 'react';
import Link from 'next/link';
import {
	CenterUnderline,
	ComesInGoesOutUnderline,
	GoesOutComesInUnderline,
} from '@/components/ui/underline-animation';

const Footer: React.FC = () => {
	return (
		<div className='w-full bg-background items-center justify-center h-full overflow-auto mb-10'>
			{/* Sticky footer. The only important thing here is the z-index, the sticky position and the bottom value */}
			<div className='sticky z-0 bottom-0 left-0 w-full h-80 bg-background flex justify-center items-center'>
				<div className='relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-primaryRed'>
					<div className='flex flex-row space-x-12 sm:pace-x-16  md:space-x-24 text-sm sm:text-lg md:text-xl'>
						<ul className='flex flex-col space-y-4 z-[1000]'>
							<Link href='/'>
								<CenterUnderline label='Home' />
							</Link>
							<Link href='/about'>
								<CenterUnderline label='About' />
							</Link>
							<Link href='/contact'>
								<CenterUnderline label='Contact Us' />
							</Link>
						</ul>
						<ul className='flex flex-col space-y-4 z-[1000]'>
							<Link href='https://github.com/vouch-ai'>
								<CenterUnderline label='Github' />
							</Link>
							<Link href='https://www.instagram.com/vouch.ai'>
								<CenterUnderline label='Instagram' />
							</Link>
							<Link href='https://x.com/vouch_ai'>
								<CenterUnderline label='X (Twitter)' />
							</Link>
						</ul>
					</div>
					<h2 className='absolute bottom-0 left-0  translate-y-1/3 sm:text-[192px]  text-[80px] text-primaryRed font-calendas'>
						Vouch
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Footer;
