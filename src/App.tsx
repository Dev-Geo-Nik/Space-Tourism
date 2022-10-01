import Home from "./pages/home/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Destination from "./pages/destination/Destination";

import DestinationSingle from "./components/DestinationSingle";

const App: React.FC = () => {
	// const customRoutes = destinations.map((destination, index) => {
	// 	const { name, description, distance, images, travel } = destination;
	// 	//  prettier-ignore
	// 	console.log(`/destination/${name.toLocaleLowerCase()} `);
	// 	return (
	// 		<Route
	// 			path={`/destination/${name.toLocaleLowerCase()} `}
	// 			key={index}
	// 			element={<DestinationSingle destinationDistance={distance} destinationName={name} destinationText={description} destinationTime={travel} destinationImage={images.png} />}
	// 		/>
	// 	);
	// });

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/destination/:name" element={<DestinationSingle />} />

				{/* {customRoutes} */}
				<Route path="*" element={<div>Error</div>} />
			</Routes>
		</Router>
	);
};

export default App;
