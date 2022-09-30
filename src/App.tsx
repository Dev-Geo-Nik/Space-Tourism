import Home from "./pages/home/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Destination from "./pages/destination/Destination";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/destination" element={<Destination />} />
				{/* <Route path="*" element={<Error>}/> */}
			</Routes>
		</Router>
	);
};

export default App;
