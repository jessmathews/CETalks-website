import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/styles.css';

const YoutubeMedia = () => {
  const videos = [
    {
      title: "Cetalks Extra Etc | Episode 01",
      thumbnail: "https://i.ytimg.com/vi/yT3IM4dMsXk/maxresdefault.jpg",
      youtubeLink: "https://youtu.be/yT3IM4dMsXk?feature=shared",
    },
    {
      title: "Chat Show with Suraj Venjaramoodu",
      thumbnail: "https://i.ytimg.com/vi/9rZXSeW_-BI/sddefault.jpg",
      youtubeLink: "https://youtu.be/9rZXSeW_-BI?feature=shared",
    },
    {
      title: "Pop Talks w/ Rajisha Vijayan",
      thumbnail: "https://i.ytimg.com/vi/Ybu0WXgt_mo/maxresdefault.jpg",
      youtubeLink: "https://youtu.be/Ybu0WXgt_mo?feature=shared",
    },
    // Add more videos as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 2000,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="max-w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12"> 
    <div className="max-w-5xl mx-auto relative">
    <div className="mb-4 text-white outfit-font">
        <div className="text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] leading-5">Latest</div> 
        <div className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] bg-gradient-to-r from-[#E8E034] to-[#C83134] bg-clip-text text-transparent inline-block">Videos</div>
        <button
            onClick={() => window.location.href = "https://www.youtube.com/@CETALKS"}
            className="rounded-md text-white text-sm md:text-base lg:text-lg font-semibold absolute top-0 right-0 mt-2 mr-4 px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-black focus:outline-none"
        >
        Explore More
        </button>
    </div>

        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col items-start p-4">
              <a href={video.youtubeLink} target="_blank" rel="noopener noreferrer">
                <div className="aspect-w-16 aspect-h-9 ytm-video-container">
                  <img
                    src={video.thumbnail}
                    alt={`Video Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
              <div className="text-white ytm-title-container">
                <p className="font-semibold text-[0.9rem] md:text-[1.08rem]">{video.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default YoutubeMedia;