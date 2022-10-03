// libraries
import { Navigate, NavLink, useLocation } from "react-router-dom";
// local
import Navigation from "../../components/Navigation";
import styles from "./technology.module.scss";

import { databaseData } from "../../data/data";

const Technology: React.FC = () => {
	const { pathname } = useLocation();
	const personName = pathname.split("/")[2];
	const { technology } = databaseData;

	const currentPerson = technology.filter((tech: any) => {
		const { name } = tech;
		const lowerCaseName = name.toLocaleLowerCase().replaceAll(" ", "-");

		if (personName === lowerCaseName) {
			return tech;
		}
	});

	if (currentPerson.length === 0) {
		return <Navigate to="/" state={{ from: pathname }} replace />;
	}

	const { name, description, images } = currentPerson[0];
	return (
		<div className={styles.technology}>
			<Navigation />
			<h2 className={styles.subtile}>
				<span className={styles.spanNumber}>03</span>Space launch 101
			</h2>
			<section className={styles.contentContainer}>
				<div className={styles.textContainer}>
					<ul className={styles.list}>
						<NavLink to="/technology/launch-vehicle" end className={({ isActive }) => (isActive ? ` ${styles.linkText} ${styles.linkActive} ` : `${styles.linkText} `)}>
							1
						</NavLink>
						<NavLink to="/technology/spaceport" end className={({ isActive }) => (isActive ? ` ${styles.linkText} ${styles.linkActive} ` : `${styles.linkText} `)}>
							2
						</NavLink>
						<NavLink to="/technology/space-capsule" end className={({ isActive }) => (isActive ? ` ${styles.linkText} ${styles.linkActive} ` : `${styles.linkText} `)}>
							3
						</NavLink>
					</ul>
					<div className={styles.technologyDetailsContainer}>
						<p className={styles.titleHeader}>THE TERMINOLOGY…</p>
						<h1 className={styles.title}>{name}</h1>
						<p className={styles.paragraph}>{description}</p>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<img src={images.portrait} alt="" className={styles.imagePortrait} />
					<img src={images.landscape} alt="" className={styles.imageLandscape} />
				</div>
			</section>
		</div>
	);
};

export default Technology;
