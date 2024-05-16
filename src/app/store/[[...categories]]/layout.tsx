export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<nav>Category Nav</nav>
			{children}
		</main>
	);
}
