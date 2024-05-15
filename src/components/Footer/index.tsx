import Image from "next/image";
import styles from "./Footer.module.css";
import { JetBrains_Mono } from "next/font/google";

const jetbrains_mono = JetBrains_Mono({ subsets: ["latin"] });

const Footer = () => {
	return (
		<div className={styles.footer__wrapper}>
			<Image
				src="/circle__footer.svg"
				alt="Círculo"
				width={10}
				height={10}
				priority
			/>
			<Image
				src="/line__footer.svg"
				alt="Línea"
				width={150}
				height={5}
				priority
				className={styles.footer__line}
			/>
			<span
				className={`${styles.footer__text} ${jetbrains_mono.className}`}
			>
				PORTAFOLIO 2024
			</span>
		</div>
	);
};

export default Footer;
