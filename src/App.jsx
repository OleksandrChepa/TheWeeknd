import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header';
import Section from './components/Section/Section';
import Footer from "./components/Footer/Footer";
import History from "./pages/History";
import Songs from "./pages/Songs";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/history" && location.pathname !== "/songs" && <Header />}
      <Routes>
        <Route path="/" element={<><Section /><Footer /></>} />
        <Route path="/history" element={<History />} />
        <Route path="/songs" element={<Songs />} />
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
