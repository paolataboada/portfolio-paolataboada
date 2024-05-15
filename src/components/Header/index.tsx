import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
	return (
		<div className={styles.header__wrapper}>
			<Link href={"/"} className={styles.header__btn__primary}>
				Online Portafolio
			</Link>
			<>
				<div className={styles.header__separator} />
				<Link href={"/"} className={styles.header__btn__secondary}>
					Sobre mí
				</Link>
				<Link href={"/"} className={styles.header__btn__secondary}>
					Educación
				</Link>
				<Link href={"/"} className={styles.header__btn__secondary}>
					Experiencia
				</Link>
				<Link href={"/"} className={styles.header__btn__secondary}>
					Proyectos
				</Link>
				<Link href={"/"} className={styles.header__btn__secondary}>
					Contacto
				</Link>

				<>
					<hr className={styles.header__line} />
					<Image
						src="/circle__footer.svg"
						alt="Círculo"
						width={10}
						height={10}
						priority
						className={styles.header__circle}
					/>
				</>
			</>
			<button className={styles.header__btn__menu}>
				<Image
					src="/menu__icon.svg"
					alt="Menu hamburguesa"
					width={35}
					height={35}
					priority
				/>
			</button>
		</div>
	);
};

export default Header;
