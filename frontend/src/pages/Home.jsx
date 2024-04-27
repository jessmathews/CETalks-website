// Home.jsx
import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Spotify from '../components/SpotifyHomePage';
import Youtube from '../components/YoutubeVideoHomePage';
import PastEvents from '../components/Pastevents';
import Testimonials from '../components/Testimonials';
import Carousel from '../components/Carousel'
import mic from '../assets/img/general/mic.png';
import pucker from '../assets/img/general/pucker.png';
const Home = () => {
  return (
    <div className="bg-07060e flex flex-col">
      <Header />
      <div className="flex-1 mt-20 bg-07060e bg-dust">
        {/* Other content for the home page goes here */}
        <Banner />
        <section >
          
          <div className='flex h-2/3 sm:flex-row flex-col m-3 flex-wrap items-center justify-between' >
            <div className='w-1/3 flex flex-col justify-center'>
            <div className='text-2xl outfit-font flex flex-col items-center justify-center flex-wrap'>
              <div className='text-white  '>Latest on</div>
            <span className='text-gold uppercase font-normal '>Cetalks</span>
            </div>
            <div className='flex  justify-center'>
            <div className='w-[6rem] relative'>
              <img src={mic} alt="mic image" className='z-1'/>
              <img src={pucker} alt="pucker" className='absolute top-[.01%] left-1/2 transform z-2' />
            </div>
          </div>
          </div>
          <div className='w-[40%] max-h-[14rem]  min-w-[16rem] min-h-[10rem] sm:pr-[5rem]' style={{overlfow:'hidden'}}>
          <Carousel />
          </div>
          </div>
        </section>
        
        <Spotify />
        <Youtube />
        <PastEvents />
        <Testimonials />
        <Footer />
        
      </div>
      
    </div>
  );
};

export default Home;
