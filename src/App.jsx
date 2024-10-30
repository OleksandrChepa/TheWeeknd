import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section/Section';
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <Router>
      <Header />
      <Section />
      <Footer />
    </Router>
  );
};

export default App;
