import React from 'react';
import Slider from 'react-slick';
import spotify2 from '../assets/img/social-icons/spotify@2x.png';
import '../styles/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = (props) => (
    <div {...props} className="custom-arrow custom-prev-arrow">
      &#60;
    </div>
  );
  
  const CustomNextArrow = (props) => (
    <div {...props} className="custom-arrow custom-next-arrow">
      &#62;
    </div>
  );
  

const Spotifypodcast = () => {
  const latestRelease = [ {
    title: 'Latest Release Title',
    releaseDate: 'Release Date',
    spotifyLink: 'https://open.spotify.com/embed/episode/2npayuoKczPJUc604fL1zs?utm_source=generator&t=0', // Replace with the actual Spotify link
  },
  {
    title: 'Latest Release Title',
    releaseDate: 'Release Date',
    spotifyLink: 'https://open.spotify.com/embed/episode/2npayuoKczPJUc604fL1zs?utm_source=generator&t=0', // Replace with the actual Spotify link 
  },
];

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed:2000,
    autoplay: true,
    autoplaySpeed: 4000, 
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 950, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="text-center">
      <h2 className="text-[1.303rem] font-inherit mt-8 text-white outfit-font mq750:gap-[5.88rem] mq1025:gap-[5.88rem] mb-7">latest  on  <img src={spotify2} alt="Spotify Icon" className="inline-block h-[1.13rem] w-[1.13rem]" /></h2>

      <Slider {...settings}>
        {latestRelease.map((event, index) => (
          <div key={index} className="event-item">
            <iframe 
            style={{ borderRadius: '12px' }}
            src={latestRelease.spotifyLink}
            width="100%" 
            height="200" 
            frameborder="0" 
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
          </div>
        ))}
      </Slider>
      {/* {latestRelease && (
        <div className="mx-auto mt-4 p-4 max-w-sif">
          <iframe 
            style={{ borderRadius: '12px' }}
            src={latestRelease.spotifyLink}
            width="100%" 
            height="200" 
            frameborder="0" 
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
      )} */}
    </div>
  );
};

export default Spotifypodcast;