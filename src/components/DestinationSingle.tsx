import styles from "./destinationSingle.module.scss";
import Navigation from "./Navigation";
import { databaseData } from "../data/data";
import { Navigate, NavLink, useLocation } from "react-router-dom";
import DestinationImage from "../assets/img/destination/background-destination-desktop.jpg";

const DestinationSingle: React.FC = () => {
	const { pathname } = useLocation();
	const destination = pathname.split("/")[2];
	const { destinations } = databaseData;

	const currentDestination = destinations.filter((destinationData: any) => {
		const { name } = destinationData;
		// console.log(name);
		if (destination === name.toLocaleLowerCase()) {
			return destinationData;
		}
	});

	if (currentDestination.length === 0) {
		return <Navigate to="/" state={{ from: pathname }} replace />;
	}

	const { name, description, travel, distance, images } = currentDestination[0];

	return (
		<div className={styles.destination}>
			<img src={DestinationImage} alt="" className={`${styles.backgroundImage} ${styles.backgroundImageDesktop}`} />

			<Navigation />
			<h2 className={styles.subtile}>
				<span className={styles.spanNumber}>01</span>Pick destination
			</h2>
			<section className={styles.contextContainer}>
				<div></div>
				<img src={images.png} alt="pic" className={styles.destinationImage} />
				<div></div>
				<div className={styles.textContainer}>
					<ul className={styles.list}>
						<NavLink to="/destination/moon" end className={({ isActive }) => (isActive ? ` ${styles.linkText} ${styles.linkActive} ` : `${styles.linkText} `)}>
							Moon
						</NavLink>
						<NavLink to="/destination/mars" end className={({ isActive }) => (isActive ? ` ${styles.linkText} ${styles.linkActive} ` : `${styles.linkText} `)}>
							Mars
						</NavLink>
						<NavLink to="/destination/europa" end className={({ isActive }) => (isActive ? ` ${styles.linkText} ${styles.linkActive} ` : `${styles.linkText} `)}>
							Europa
						</NavLink>
						<NavLink to="/destination/titan" end className={({ isActive }) => (isActive ? ` ${styles.linkText} ${styles.linkActive} ` : `${styles.linkText} `)}>
							Titan
						</NavLink>
					</ul>

					<p className={styles.destinationTitle}>{name}</p>
					<p className={styles.destinationParagraph}>{description}</p>

					<div className={styles.line}></div>

					<div className={styles.distanceContainer}>
						<p className={styles.distanceLabel}>AVG. DISTANCE</p>
						<p className={styles.distanceText}>{distance}</p>
					</div>
					<div className={styles.timeContainer}>
						<p className={styles.timeLabel}>Est. travel time</p>
						<p className={styles.timeText}>{travel}</p>
					</div>
				</div>
				<div></div>
			</section>
		</div>
	);
};

export default DestinationSingle;
