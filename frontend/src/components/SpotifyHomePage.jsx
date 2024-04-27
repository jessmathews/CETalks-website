import React from 'react';
import spotify2 from '../assets/img/social-icons/spotify@2x.png';
import '../styles/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SpotifyHomePage = () => {
  const spotifyData = [
    {
      title: 'Event 2',
      spotifyLink: 'https://open.spotify.com/embed/episode/5k0yZRvDLbCBMfUY3cPEKZ?utm_source=generator&t=0'
    },
    {
      title: 'Event 3',
      spotifyLink: 'https://open.spotify.com/embed/episode/2MnNwUgxxkVUnleU3BCikd?utm_source=generator&t=0'
    },
    {
      title: 'Latest Release Title',
      spotifyLink:  'https://open.spotify.com/embed/episode/2m0BbuBf8tFu1NuiPyKoD7?utm_source=generator&t=0'
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  return (
    <div className="text-center w-screen flex flex-col items-center" >
      <h2 className="text-[1.303rem] font-inherit mt-8 text-white outfit-font mq750:gap-[5.88rem] mq1025:gap-[5.88rem] mb-7">Latest  on  <img src={spotify2} alt="Spotify Icon" className="inline-block h-[1.13rem] w-[1.13rem]" /></h2>
    <div className='sm:w-1/2 w-full rounded-md'>
      <Slider {...settings} >
      {spotifyData.map((podcast, index) => (
          <div className="mx-auto mt-4 p-4 max-w-sif " key={index}>
          <iframe 
            style={{ borderRadius: '12px' }}
            src={podcast.spotifyLink}
            width="100%" 
            height="200" 
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
        
        ))}
    </Slider >
    </div>
    </div>
  );
}

export default SpotifyHomePage;
