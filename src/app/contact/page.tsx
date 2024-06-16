import Image from "next/image";
import styles from "./Contact.module.css";

const Contact = () => {
	return (
		<>
			<main className={styles.main}>
				<div className={styles.main__wrapper}>
					<div className={styles.main__title_section}>
						<p>CONTÁCTAME</p>
						<span>TRABAJEMOS JUNTOS</span>
					</div>
					<div className={styles.main__contact_items}>
						<div className={styles.main__contact_item}>
							<Image
								src="/phone__icon.svg"
								alt="Icono de teléfono"
								width={50}
								height={50}
								priority
							/>
							<div className={styles.contact__item_info}>
								<p>Número Celular</p>
								<span>+51 933267664</span>
							</div>
						</div>
						<div className={styles.main__contact_item}>
							<Image
								src="/email__icon.svg"
								alt="Icono de correo"
								width={50}
								height={50}
								priority
							/>
							<div className={styles.contact__item_info}>
								<p>Correo electrónico</p>
								<span>taboadapaola3@gmail.com</span>
							</div>
						</div>
						<div className={styles.main__contact_item}>
							<Image
								src="/linkedin__icon.svg"
								alt="Icono de Linkedin"
								width={50}
								height={50}
								priority
							/>
							<div className={styles.contact__item_info}>
								<p>LinkedIn</p>
								<a
									href="https://www.linkedin.com/in/paolataboada"
									target="_blank"
								>
									/in/paolataboada/
								</a>
							</div>
						</div>
						<div className={styles.main__contact_item}>
							<Image
								src="/github__icon.svg"
								alt="Icono de GitHub"
								width={50}
								height={50}
								priority
							/>
							<div className={styles.contact__item_info}>
								<p>GitHub</p>
								<a
									href="https://github.com/paolataboada"
									target="_blank"
								>
									/paolataboada
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
			<div className={styles.footer__wrapper}>
				<Image
					src="/circle__footer.svg"
					alt="Círculo"
					width={10}
					height={10}
					priority
				/>
				<hr className={styles.footer__line} />
				<Image
					src="/circle__footer.svg"
					alt="Círculo"
					width={10}
					height={10}
					priority
				/>
			</div>
			<div className={styles.footer__fullname}>PAOLA TABOADA</div>
		</>
	);
};

export default Contact;
