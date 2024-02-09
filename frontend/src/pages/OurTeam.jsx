// OurTeam.jsx
import React from 'react';
import Teammember from '../components/Teammember';
import '../styles/styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
const OurTeam = () => {
  return (
    <div className="bg-07060e">
    <Header />
    <div className="mt-20 "></div>
    <div>
      <Teammember />
    </div>
    <Footer />
    </div>
  );
};

export default OurTeam;
