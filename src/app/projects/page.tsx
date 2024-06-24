"use client";

import { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { projects } from "./projects";
import Image from "next/image";

const Projects = () => {
	const [windowWidth, setWindowWidth] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalProjects = projects.length;

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
	};

	const goToNext = () => {
		setCurrentIndex((prevIndex) =>
			Math.min(prevIndex + 1, totalProjects - 1)
		);
	};

	return (
		<main className={styles.main}>
			<div className={styles.main__wrapper}>
				<div className={styles.main__title_section}>
					<p>PROYECTOS</p>
					<span></span>
				</div>
				<div className={styles.main__experience_period}>
					2021 - 2024
				</div>
				<>
					{windowWidth < 850 ? (
						<div className={styles.main__wrapper_project}>
							{projects.map((project) => (
								<div
									className={styles.main__project}
									key={project.id}
								>
									<img
										className={styles.main__project_view}
										src={project.imageSrc}
										alt={project.name}
									/>
									<p>
										{project.name} | {project.year}
									</p>
									<p
										className={
											styles.main__project_description
										}
									>
										{project.description}
									</p>
									<p className={styles.main__project_tools}>
										{project.tools}
									</p>
								</div>
							))}
						</div>
					) : (
						<div className={styles.main__wrapper_carousel}>
							{currentIndex > 0 && (
								<button
									onClick={goToPrevious}
									className={`${styles.main__carousel_button} ${styles.carousel__prev_button}`}
								></button>
							)}
							<div className={styles.main__carousel_content}>
								{projects.map((project, index) => (
									<div
										key={index}
										className={styles.main__carousel_slide}
										style={{
											transform: `translateX(-${
												currentIndex * 25
											}%)`,
										}}
									>
										<Image
											className={
												styles.carousel__project_view
											}
											src={project.imageSrc}
											alt={project.name}
											width={300}
											height={230}
											priority
										/>
										<p>
											{project.name} | {project.year}
										</p>
										<p
											className={
												styles.carousel__project_description
											}
										>
											{project.description}
										</p>
										<p
											className={
												styles.carousel__project_tools
											}
										>
											{project.tools}
										</p>
									</div>
								))}
							</div>
							{currentIndex < totalProjects - 1 && (
								<button
									onClick={goToNext}
									className={`${styles.main__carousel_button} ${styles.carousel__next_button}`}
								></button>
							)}
						</div>
					)}
				</>
			</div>
		</main>
	);
};

export default Projects;
