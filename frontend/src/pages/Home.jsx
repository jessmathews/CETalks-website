// Home.jsx
import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Spotify from '../components/SpotifyHomePage';
import Youtube from '../components/YoutubeVideoHomePage';
import UpcomingEvents from '../components/Upcomingevents';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="bg-07060e flex flex-col">
      <Header />
      <div className="flex-1 mt-20 bg-07060e">
        {/* Other content for the home page goes here */}
        <Banner />
        <Spotify />
        <Youtube />
        <UpcomingEvents />
        <Testimonials />
        <Footer />
        
      </div>
      
    </div>
  );
};

export default Home;
