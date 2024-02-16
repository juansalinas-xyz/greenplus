import Link from "next/link";
import "./Home.css";
import "./globals.css";

export default async function RootLayout() {
	return ( 
		<>
			Inicio
			<br />
			<Link href="/private/dashboard">Dashboard</Link>
		</> 
	);
}