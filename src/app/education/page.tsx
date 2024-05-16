import styles from "./Education.module.css";

const Education = () => {
	return (
		<main className={styles.main}>
			<div className={styles.main__wrapper}>
				<div className={styles.main__title_section}>
					<p>EDUCACIÓN</p>
					<span></span>
				</div>
				<div className={styles.main__content_section}>
					En 2020, durante mi último año de estudios en Administración
					de Empresas, experimenté un cambio profundo en mi visión
					profesional. La pandemia de COVID-19 fue un impulso para
					descubrir nuevas oportunidades y desarrollar un apasionado
					interés por la tecnología. Desde entonces, he enfocado mi
					desarrollo profesional en explorar cómo la tecnología puede
					revolucionar y mejorar múltiples aspectos del ámbito
					empresarial y más allá.
				</div>
			</div>
			<div className={styles.main__wrapper_education}>
				<div className={styles.main__education_period}>2016 - 2021</div>
				<div className={styles.main__educational_institute}>
					<p>Laboratoria Bootcamp</p>
					<p>Especialización en Desarrollo Web Front End | 2021</p>
				</div>
				<div className={styles.main__educational_institute}>
					<p>Universidad Nacional Jorge Basadre Grohmann</p>
					<p>Bachiller en Ciencias Administrativas | 2016 - 2020</p>
				</div>
				<div className={styles.main__educational_institute}>
					<p>Instituto de Informática y Telecomunicaciones</p>
					<p>Técnico En Ofimática | 2019</p>
				</div>
				<div className={styles.main__educational_institute}>
					<p>Centro de Idiomas - UNJBG</p>
					<p>English | Advanced Level | 2016 - 2018</p>
				</div>
			</div>
		</main>
	);
};

export default Education;
