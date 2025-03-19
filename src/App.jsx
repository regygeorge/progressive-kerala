import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import SocialSecurity from "./components/SocialSecurity";
// Import other pages

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/socialSecurity" element={<SocialSecurity />} />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
