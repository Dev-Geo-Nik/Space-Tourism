// Local imports
import styles from "./home.module.scss";

import Navigation from "../../components/Navigation";

const Home: React.FC = () => {
	return (
		<div className={styles.home}>
			<Navigation />
		</div>
	);
};

export default Home;

// {
//   <div className={styles.home}>
//       <header className={`${styles.primaryHeader} flex`}>
//         <div>
//           <img src={Logo} alt="space tourism logo" />
//         </div>
//         <ul className={"primary-navigation underline-indicators flex"}>
//           <li className="active">
//             <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="/">
//               <span>00</span> Home
//             </a>
//           </li>
//           <li className="">
//             <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="/destination">
//               <span>01</span> Destination
//             </a>
//           </li>
//           <li className="">
//             <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="/Crew">
//               <span>02</span> Crew
//             </a>
//           </li>

//           <li className="">
//             <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="/Technology">
//               <span>03</span> Technology
//             </a>
//           </li>
//         </ul>
//       </header>

//       <div className="grid-container">
//         <div>
//           <h1 className="text-accent fs-500 letter-spacing-1 ff-sans-cond uppercase">
//             So, you want to travel to
//             <span className="fs-900 ff-serif text-white">Space</span>
//           </h1>
//           <p>
//             Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
//             of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
//           </p>
//         </div>
//         <div>
//           <a href="/explore" className="large-button uppercase ff-serif fs-600 text-dark bg-white">
//             Explore
//           </a>
//         </div>
//       </div>
//     </div>
// }
