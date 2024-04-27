import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import event1 from '../assets/img/events/event-1.jpg';
import event2 from '../assets/img/events/event-2.jpg';
import event3 from '../assets/img/events/event-3.jpg';

// Custom arrow components
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

const Pastevents = () => {
  const eventsData = [
    {
      title: 'Event 1',
      date: 'January 1, 2024',
      imageUrl: event1, // Replace with the actual image URL
    },
    {
      title: 'Event 2',
      date: 'September 19, 2023',
      imageUrl: event2, // Replace with the actual image URL
    },
    {
      title: 'Event 3',
      date: 'October 3, 2023',
      imageUrl: event3, // Replace with the actual image URL
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
    <div className="text-center  sm:mt-1 lg:mt-10" style={{ overflow: 'hidden' }}>
      <h2 className="text-[1.303rem] font-inherit mt-8 text-white outfit-font mb-7">Past Events</h2>

      <Slider {...settings}>
        {eventsData.map((event, index) => (
          <div key={index} className="event-item">
            <img
              src={event.imageUrl}
              alt={`Event ${index + 1}`}
              className="mx-auto mb-4 rounded-md max-h-[28rem]" // Adjust max height as needed
              style={{ maxWidth: '100%', height: '300px' }} // Make images responsive
            />

            <p className="text-gray-500 mb-2">{event.date}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Pastevents;
