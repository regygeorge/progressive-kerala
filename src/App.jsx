import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import SocialSecurity from "./components/SocialSecurity";
import Abkari from "./components/Abkari.jsx";
import Healthcare from "./components/Healthcare.jsx";
import Transportation from "./components/Transportation.jsx";
import Sports from "./components/Sports.jsx";
import Wildlife from "./components/Wildlife.jsx";
import Revenue from "./components/Revenue.jsx";
// Import other pages

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/socialSecurity" element={<SocialSecurity />} />
        <Route path="/abkari" element={<Abkari />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/wildlife" element={<Wildlife />} />
        
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
