// Home.jsx

import React from 'react';
import Banner from '../components/Banner'; // Adjust the path if needed
import Header from '../components/Header';

const Home = () => {
  // Your Home component logic
  return (
    <div>
    <Header />
    <div className="mt-20"></div>
    <Banner />
      {/* Other content for the home page goes here */}
    </div>
  );
};

export default Home;
