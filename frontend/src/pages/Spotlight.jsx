// Spotlight.jsx

import React ,{useState,useEffect} from 'react';
import Header from '../components/Header';
import Pastyears from '../components/Spotlightinfo';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Spotlight = () => {
  // Your Spotlight component logic
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });
  return (
    isLoading ? (<Loader />) :(
    <div>
    <Header />
    <div className="flex-1 bg-07060e bg-dust">
      {/* Spotlight page content */}
      <Pastyears />
      <Footer />
      </div>
    </div>
    )
  );
};

export default Spotlight;
