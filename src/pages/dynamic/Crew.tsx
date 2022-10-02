import styles from "./crew.module.scss";
import Navigation from "../../components/Navigation";
import { databaseData } from "../../data/data";
// libraries
import { Navigate, NavLink, useLocation } from "react-router-dom";

const Crew: React.FC = () => {
	const { pathname } = useLocation();
	const personName = pathname.split("/")[2];
	const { crew } = databaseData;

	const currentPerson = crew.filter((person: any) => {
		const { name } = person;
		const lowerCaseName = name.toLocaleLowerCase().replaceAll(" ", "-");

		if (personName === lowerCaseName) {
			return person;
		}
	});

	if (currentPerson.length === 0) {
		return <Navigate to="/" state={{ from: pathname }} replace />;
	}

	const { name, bio, role, images } = currentPerson[0];

	return (
		<div className={styles.crew}>
			<Navigation />
			<section className={styles.content}>
				<div className={styles.textContainer}>
					<h2 className={styles.subtile}>
						<span className={styles.spanNumber}>02</span>Meet your crew
					</h2>
					<p className={styles.specialty}>{role}</p>
					<h1 className={styles.name}>{name}</h1>
					<p className={styles.mainText}>{bio}</p>
					<ul className={styles.list}>
						<NavLink to="/crew/douglas-hurley" end className={({ isActive }) => (isActive ? ` ${styles.linkText} ${styles.linkActive} ` : `${styles.linkText} `)}></NavLink>
						<NavLink to="/crew/mark-shuttleworth" end className={({ isActive }) => (isActive ? ` ${styles.linkText} ${styles.linkActive} ` : `${styles.linkText} `)}></NavLink>
						<NavLink to="/crew/victor-glover" end className={({ isActive }) => (isActive ? ` ${styles.linkText} ${styles.linkActive} ` : `${styles.linkText} `)}></NavLink>
						<NavLink to="/crew/anousheh-ansari" end className={({ isActive }) => (isActive ? ` ${styles.linkText} ${styles.linkActive} ` : `${styles.linkText} `)}></NavLink>
					</ul>
				</div>
				<div className={styles.imageContainer}>
					<img src={images.png} alt={name} className={styles.image} />
				</div>
			</section>
		</div>
	);
};

export default Crew;
