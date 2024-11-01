import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HistoryHeader from "../components/HistoryHeader/HistoryHeader";
import HistorySection from "../components/HistorySection/HistorySection";
import Footer from "../components/Footer/Footer";

const History = () => {
  return (
    <Router>
      <HistoryHeader/>
      <HistorySection/>
      <Footer/>
    </Router>
  );
};

export default History;
