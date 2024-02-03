import "./globals.css";
import "./Home.css"
import { type ReactNode } from "react";
import { getAllUsers } from "@usecase/user";
import { User } from "@model/user";

export default async function RootLayout(props: { children: ReactNode }) {
	const users: User[] = await getAllUsers();
	return (
		<div className="home-container">
			<header className="header">
				<h1>Bienvenido a Green Plus!</h1>
				<a></a>
			</header>

			<section className="main-section ">
				<h2>Bienvenido a nuestra plataforma de tokenización de créditos de carbono.</h2>
				<p>Estamos comprometidos con la sostenibilidad y la reducción de la huella de carbono.</p>
				<p>¡Únete a nosotros para un futuro más verde!</p>
			</section>

			<section className="main-section">
				<h1>Usuarios</h1>
				{users.length > 0 ? (
					<ul>
						{users.map((user, index) => (
							<li key={index}>{`${user.name} ${user.lastName}`}</li>
						))}
					</ul>
				) : (
					<p>No hay usuarios registrados.</p>
				)}
			</section>

			<footer className="footer">
				<p>&copy; 2024 Green Plus</p>
			</footer>
		</div>
	);
}