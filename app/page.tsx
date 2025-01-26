import Link from 'next/link';

export default async function Home() {
	return (
		<main className='flex flex-col items-center justify-center h-full'>
			<div>Home Page New</div>
			<div>
				<Link href='/'>Home</Link>
			</div>
		</main>
	);
}
