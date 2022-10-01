// Local imports
import styles from "./home.module.scss";

import Navigation from "../../components/Navigation";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
	return (
		<div className={styles.home}>
			<Navigation />
			<section className={styles.homeContent}>
				<div></div>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>
						SO, YOU WANT TO TRAVEL TO<span className={styles.spanText}>SPACE</span>
					</h1>
					<p className={styles.paragraph}>
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give
						you a truly out of this world experience!
					</p>
				</div>
				<div className={styles.btnContainer}>
					<Link to="/destination/moon" className={styles.exploreButton}>
						<span className={styles.exploreText}>Explore</span>
					</Link>
				</div>
				<div></div>
			</section>
		</div>
	);
};

export default Home;
