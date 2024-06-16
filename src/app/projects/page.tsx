import styles from "./Projects.module.css";

const Projects = () => {
	return (
		<main className={styles.main}>
			<div className={styles.main__wrapper}>
				<div className={styles.main__title_section}>
					<p>PROYECTOS</p>
					<span></span>
				</div>
				<div className={styles.main__experience_period}>
					2021 - 2023
				</div>
				<div className={styles.main__wrapper_project}>
					<div className={styles.main__project}>
						<div className={styles.main__project_view}></div>
						<p>mdLinks | 2021</p>
						<p>
							Creación de una librería y script ejecutable que
							permite leer y analizar archivos markdown,
							verificando su contenido y mostrando su código de
							estado.
						</p>
					</div>
					<div className={styles.main__project}>
						<div className={styles.main__project_view}></div>
						<p>Social Network | 2021</p>
						<p>
							Creación de red social donde el usuario puede crear
							una cuenta, loguearse, crear, editar, borrar y
							likear posts.
						</p>
					</div>
					<div className={styles.main__project}>
						<div className={styles.main__project_view}></div>
						<p>Data Lovers | 2021</p>
						<p>
							Creación de una web que consume data en formato
							JSON, y permite filtrar u ordenar la información.
						</p>
					</div>
					<div className={styles.main__project}>
						<div className={styles.main__project_view}></div>
						<p>Card Validation</p>
						<p>
							Creación de una web que valida tarjetas de crédito y
							enmascara los primeros dígitos protegiendo los
							datos.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Projects;
