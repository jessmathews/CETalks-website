// Spotlight.jsx

import React from 'react';
import Header from '../components/Header';
import Pastyears from '../components/Spotlightinfo';
import Footer from '../components/Footer';

const Spotlight = () => {
  // Your Events component logic
  return (
    <div>
    <Header />
    <div className="flex-1 bg-07060e">
      {/* Events page content */}
      <Pastyears />
      <Footer />
      </div>
    </div>
  );
};

export default Spotlight;
