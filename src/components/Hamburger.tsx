import styles from "./hamburger.module.scss";
import HamburgerIcon from "../assets/img/shared/icon-hamburger.svg";
import CloseIcon from "../assets/img/shared/icon-close.svg";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Hamburger: React.FC = () => {
	const hamburgerRef = useRef<any>(null);
	const closeIconRef = useRef<any>(null);
	const modalRef = useRef<any>(null);

	const handlerClick = () => {
		console.log("open menu");
		if (hamburgerRef.current != null) {
			hamburgerRef.current.style.display = "none";
			modalRef.current.style.display = "block";
		}
	};

	const closeHandler = () => {
		modalRef.current.style.display = "none";
		hamburgerRef.current.style.display = "block";
	};

	return (
		<>
			<img src={HamburgerIcon} alt="" className={styles.hamburgerIcon} onClick={handlerClick} ref={hamburgerRef} />
			<div className={styles.modal} ref={modalRef}>
				<img src={CloseIcon} alt="" className={styles.closeIcon} onClick={closeHandler} ref={closeIconRef} />
				<ul className={styles.list}>
					<li>
						<Link to="/" className={styles.link}>
							<span className={styles.number}>00</span> Home
						</Link>
					</li>
					<li>
						<Link to="/destination/moon" className={styles.link}>
							<span className={styles.number}>01</span> Destination
						</Link>
					</li>
					<li>
						<Link to="/crew/douglas-hurley" className={styles.link}>
							<span className={styles.number}>02</span> Crew
						</Link>
					</li>
					<li>
						<Link to="/technology/launch-vehicle" className={styles.link}>
							<span className={styles.number}>03</span> Technology
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Hamburger;
