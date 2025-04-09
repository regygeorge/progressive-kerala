import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// Static components
import Home from "./components/Home";
 
import AdminForm from "./components/AdminForm";
import AdminCardForm from "./components/AdminCardForm";
import Login from "./components/Login";
import InviteFriendsCard from "./components/InviteFriendsCard";
import SignupPage from "./components/SignupPage";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Header from "./components/Header";
 
import DynamicPage from "./components/DynamicPage"; // To render content from DB

const App = () => {
  const [dynamicRoutes, setDynamicRoutes] = useState([]);
  const [loadingRoutes, setLoadingRoutes] = useState(true);

  useEffect(() => {
    axios.get("/mnm-api/policy-cards")
      .then((res) => {
        setDynamicRoutes(res.data);
        setLoadingRoutes(false); // ✅ Routes are ready
      })
      .catch((err) => {
        console.error("Failed to fetch dynamic routes", err);
        setLoadingRoutes(false); // Still render app if failed
      });
  }, []);

  return (
    <Router>
      <Header />

      {/* ✅ Wait for route loading */}
      {!loadingRoutes && (
        <Routes>
          {/* Static routes */}
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminForm />} />
          <Route path="/admin-card" element={<AdminCardForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/invite" element={<InviteFriendsCard />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
 

          {/* ✅ Dynamic routes */}
          {dynamicRoutes.map((route) => (
  <Route
    key={route.path}
    path={route.path}
    element={<DynamicPage policyHead={route.policyHead} />}
  />
))}


          {/* Optional: Fallback route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      )}
    </Router>
  );
};

export default App;
