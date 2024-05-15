import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
	return (
		<div className={styles.header__wrapper}>
			<Link href={"/"} className={styles.header__btn__primary}>
				Online Portafolio
			</Link>
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
