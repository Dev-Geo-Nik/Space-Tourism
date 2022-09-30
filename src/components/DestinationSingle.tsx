import styles from "./destinationSingle.module.scss";
import Navigation from "./Navigation";
import image from "../assets/img/destination/image-moon.webp";
import { NavLink } from "react-router-dom";
const DestinationSingle: React.FC = () => {
	return (
		<div className={styles.destination}>
			<Navigation />
			<h2 className={styles.subtile}>
				<span className={styles.spanNumber}>01</span>Pick destination
			</h2>
			<section className={styles.contextContainer}>
				<div></div>
				<img className={styles.destinationImage} src={image} alt="destination planet " />
				<div></div>
				<div className={styles.textContainer}>
					<ul className={styles.list}>
						<NavLink to="/destination/" end className={({ isActive }) => (isActive ? ` ${styles.linkText} ${styles.linkActive} ` : `${styles.linkText} `)}>
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
					<p className={styles.destinationTitle}>Moon</p>
					<p className={styles.destinationParagraph}>
						See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by
						visiting the Luna 2 and Apollo 11 landing sites.
					</p>
					<div className={styles.line}></div>
				</div>
				<div></div>
			</section>
		</div>
	);
};

export default DestinationSingle;
