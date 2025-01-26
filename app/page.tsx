import Link from 'next/link';

export default async function Home() {
	return (
		<main>
			<div>Home Page New</div>
			<div>
				<Link href='/'>Home</Link>
			</div>
		</main>
	);
}
