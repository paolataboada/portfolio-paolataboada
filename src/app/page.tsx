import { Inter, Montserrat } from "next/font/google";
import styles from "./page.module.css";

const montserrat = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={`${styles.main} ${montserrat.className}`}>
			<div className={styles.main__greeting}>
				<p>HOLA!!!</p>
				<p>ENCANTADA DE CONOCERTE ❤️, YO SOY</p>
			</div>
			<div className={`${styles.main__name} ${inter.className}`}>
				Paola Taboada
			</div>
			<div className={`${styles.main__tag}  ${inter.className}`}>
				FRONT END DEVELOPER
			</div>
			<div className={styles.main__presentation}>
				Front-end Developer, Bach. en Ciencias Administrativas y
				apasionada por el mundo de la tecnología, me considero una
				persona organizada, autodidacta, comprometida y capaz de
				trabajar en equipo. Me gusta asumir retos que me permitan poner
				en acción mis habilidades y así poder generar soluciones de
				valor.
			</div>
			<div className={styles.main__keywords}>
				Autodidacta, trabajo en equipo, SCRUM, compromiso,
				responsabilidad
			</div>
			<div className={styles.main__wrapper_download}>
				<button
					className={`${styles.main__btn_download} ${inter.className}`}
				>
					DESCARGAR CV
				</button>
			</div>
		</main>
	);
}
