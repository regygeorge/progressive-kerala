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
import AdminForm from "./components/AdminForm.jsx";
import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import InviteFriendsCard from "./components/InviteFriendsCard.jsx";
import SignupPage from "./components/SignupPage.jsx"
import ForgotPassword from "./components/ForgotPassword.jsx";
import ResetPassword from "./components/ResetPassword.jsx";

// Import other pages

const App = () => {
  return (
    <Router>
        <Header />
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
        <Route path="/admin" element={<AdminForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/invite" element={<InviteFriendsCard />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
        
        
         

        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
