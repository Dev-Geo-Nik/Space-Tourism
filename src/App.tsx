import DesignSystem from "./pages/DesignSystem";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<DesignSystem />} />
        {/* <Route path="*" element={<Error>}/> */}
      </Routes>
    </Router>
  );
};

export default App;
