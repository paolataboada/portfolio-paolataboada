import { JetBrains_Mono } from "next/font/google";
import styles from "./Experience.module.css";

const jetbrains_mono = JetBrains_Mono({ subsets: ["latin"] });

const Experience = () => {
	return (
		<main className={styles.main}>
			<div className={styles.main__wrapper}>
				<div className={styles.main__title_section}>
					<p>EXPERIENCIA</p>
					<span></span>
				</div>
				<div className={styles.main__experience_period}>
					2021 - 2023
				</div>
				<div className={styles.main__workplace}>
					<div className={styles.main__workplace_company}>
						<span className={jetbrains_mono.className}>»</span>
						<div>
							<p>KURAX S.A.C.</p>
							<p>Desarrollador Front End - 2023</p>
						</div>
					</div>
					<p>
						Se desarrollaron varios proyectos, dentro de los cuales
						destacan la creación de una plataforma de gestión de
						ventas (Next.js 13, React Prime, APIs), un landing page
						para el registro de clientes (React, MUI, React Hook
						Form, Yup, MUI), el landing page empresarial de KURAX
						(HTML y Tailwind). Además, se atendieron diversos
						requerimientos para mejorar la UI/UX de la página web
						del cliente principal.
					</p>
				</div>
				<div className={styles.main__workplace}>
					<div className={styles.main__workplace_company}>
						<span className={jetbrains_mono.className}>»</span>
						<div>
							<p>Software Enterprise Services</p>
							<p>
								Ingeniero de Fábrica de Software nivel C - 2022
							</p>
						</div>
					</div>
					<p>
						Formé parte del proyecto de migración de aplicaciones
						web desarrolladas en AngularJS a Angular 12. Además,
						estuve a cargo de actualizar las versiones de Bootstrap
						y DataTables en diversos módulos del sistema interno de
						la empresa.
					</p>
				</div>
				<div className={styles.main__workplace}>
					<div className={styles.main__workplace_company}>
						<span className={jetbrains_mono.className}>»</span>
						<div>
							<p>Laboratoria Bootcamp Front-End</p>
							<p>Desarrollador Front End - 2021</p>
						</div>
					</div>
					<p>
						Desarrollé proyectos tales como mdLinks (script
						ejecutable que analiza archivos markdown), Social
						Network (red social), Data Lovers (manejo de data JSON)
						y Card Validation (validación de tarjetas con el
						algoritmo Luhn).
					</p>
				</div>
			</div>
		</main>
	);
};

export default Experience;
