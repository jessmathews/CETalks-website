// OurTeam.jsx
import React from 'react';
import Teammember from '../components/Teammember';
import '../styles/styles.css';
import Header from '../components/Header';
const OurTeam = () => {
  return (
    <div>
    <Header />
    <div className="mt-20"></div>
    <div className="bg-26221E">
      <Teammember />
    </div>
    {/* Add footer */}
    </div>
  );
};

export default OurTeam;
