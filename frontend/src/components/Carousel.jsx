import React, { Component } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import euphony_western from '../assets/img/latest/euphony_western.jpg';
import euphony_eastern from '../assets/img/latest/euphony_eastern.jpg';

function Carousel() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    outerWidth: false,
  };
  return (
    <Slider {...settings} >
      <div>
        <img src={euphony_eastern} className="winner-image max-h-[15rem] mx-auto object-contain m-[1rem]"></img>
      </div>
      <div>
        <img src={euphony_western} className="winner-image max-h-[15rem] mx-auto object-contain m-[1rem]"></img>
      </div>
    </Slider >
  );
}

export default Carousel;
