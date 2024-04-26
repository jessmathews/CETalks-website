import React, { Component } from "react";
import Slider from "react-slick";

function Carousel() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };
  return (
    <Slider {...settings} >
      <div>
        <img src="https://placehold.co/400X200" className="winner-image max-h-[15rem] mx-auto object-contain m-[1rem]"></img>
      </div>
      <div>
        <img src="https://placehold.co/400X200" className="winner-image max-h-[15rem] mx-auto object-contain m-[1rem]"></img>
      </div>
      <div>
        <img src="https://placehold.co/400X200" className="winner-image max-h-[15rem] mx-auto object-contain m-[1rem]"></img>
      </div>
      <div>
        <img src="https://placehold.co/400X200" className="winner-image max-h-[15rem] mx-auto object-contain m-[1rem]"></img>
      </div>
      <div>
        <img src="https://placehold.co/400X200" className="winner-image max-h-[15rem] mx-auto object-contain m-[1rem]"></img>
      </div>
      <div>
        <img src="https://placehold.co/400X200" className="winner-image max-h-[15rem] mx-auto object-contain m-[1rem]"></img>
      </div>
    </Slider >
  );
}

export default Carousel;
