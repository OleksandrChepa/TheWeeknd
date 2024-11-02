import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header';
import Section from './components/Section/Section';
import Footer from "./components/Footer/Footer";
import History from "./pages/History";
import Songs from "./pages/Songs";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const AppContent = () => {
  const location = useLocation();

  return (
    <>

      {location.pathname !== "/history" && location.pathname !== "/songs" &&  location.pathname !== "/login" && location.pathname !== "/register" && <Header />}
      <Routes>
        <Route path="/" element={<><Section /><Footer /></>} />
        <Route path="/history" element={<History />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
