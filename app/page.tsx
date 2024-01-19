import "./globals.css";
import "./Home.css"
import { type ReactNode } from "react";
export default function RootLayout(props: { children: ReactNode }) {
	return (
		<div className="home-container">
		  <header className="header">
			<h1>Bienvenido a Green Plus!</h1>
		  </header>
	
		  <section className="main-section">
			<h2>Bienvenido a nuestra plataforma de tokenización de créditos de carbono</h2>
			<p>Estamos comprometidos con la sostenibilidad y la reducción de la huella de carbono.</p>
			<p>¡Únete a nosotros para un futuro más verde!</p>
		  </section>
	
		  <footer className="footer">
			<p>&copy; 2024 Green Plus</p>
		  </footer>
		</div>
	  );
}