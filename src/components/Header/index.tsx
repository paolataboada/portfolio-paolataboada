"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
	const pathname = usePathname();
	console.log(pathname);

	return (
		<div className={styles.header__wrapper}>
			<Link href={"/"} className={styles.header__btn__primary}>
				Online Portafolio
			</Link>
			<div className={styles.header__separator} />
			<Link
				href={"/about-me"}
				className={`${styles.header__btn__secondary} ${
					pathname === "/about-me" ? `${styles.active}` : ""
				}`}
			>
				Sobre mí
			</Link>
			<Link
				href={"/education"}
				className={`${styles.header__btn__secondary} ${
					pathname === "/education" ? `${styles.active}` : ""
				}`}
			>
				Educación
			</Link>
			<Link
				href={"/experience"}
				className={`${styles.header__btn__secondary} ${
					pathname === "/experience" ? `${styles.active}` : ""
				}`}
			>
				Experiencia
			</Link>
			<Link
				href={"/projects"}
				className={`${styles.header__btn__secondary} ${
					pathname === "/projects" ? `${styles.active}` : ""
				}`}
			>
				Proyectos
			</Link>
			<Link
				href={"/contact"}
				className={`${styles.header__btn__secondary} ${
					pathname === "/contact" ? `${styles.active}` : ""
				}`}
			>
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

			{/* MENU RESPONSIVE */}
			<label htmlFor="menu" className={styles.header__btn__menu}>
				<Image
					src="/menu__icon.svg"
					alt="Menu hamburguesa"
					width={35}
					height={35}
					priority
				/>
			</label>
			<input type="checkbox" id="menu" className={styles.header__input} />
			<div className={styles.menu__responsive}>
				<a href={"/about-me"}>Sobre mí</a>
				<a href={"/education"}>Educación</a>
				<a href={"/experience"}>Experiencia</a>
				<a href={"/projects"}>Proyectos</a>
				<a href={"/contact"}>Contacto</a>
			</div>
		</div>
	);
};

export default Header;
