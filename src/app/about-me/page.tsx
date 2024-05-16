import Image from "next/image";
import styles from "./AboutMe.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const AboutMe = () => {
	return (
		<main className={styles.main}>
			<div className={styles.main__wrapper_emoji}>
				<Image
					src="/thumbs_up.gif"
					alt="Emoji principal"
					width={600}
					height={600}
					priority
				/>
			</div>
			<div className={styles.main__wrapper}>
				<div className={styles.main__title_section}>
					<p>BIOGRAFÍA</p>
					<span></span>
				</div>
				<div className={styles.main__content_section}>
					¡Hola! Soy Paola, una apasionada del desarrollo front-end
					con experiencia en la creación de interfaces web dinámicas y
					atractivas. Me especializo en utilizar tecnologías como
					HTML, CSS y JavaScript para dar vida a diseños innovadores.
					He trabajado en diversos proyectos donde he aplicado mi
					creatividad y habilidades técnicas para optimizar la
					experiencia del usuario. Mi objetivo es combinar diseño y
					funcionalidad para ofrecer productos web de calidad. Gracias
					por visitar mi portafolio. Si estás buscando una
					desarrolladora front-end comprometida y entusiasta para tu
					próximo proyecto, ¡no dudes en ponerte en contacto conmigo!
				</div>
				<div className={styles.main__skills_section}>
					<p>Habilidades e intereses</p>
					<div
						className={`${styles.main__skills_box} ${inter.className}`}
					>
						<div className={styles.javascript}>JAVASCRIPT</div>
						<div className={styles.html}>HTML5</div>
						<div className={styles.css}>CSS3</div>
						<div className={styles.react}>REACT</div>
						<div className={styles.angular}>ANGULAR</div>
						<div className={styles.nodejs}>NODEJS</div>
						<div className={styles.nextjs}>NEXTJS</div>
						<div className={styles.git}>GIT</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default AboutMe;
