import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const winner1 = (await import('../assets/img/rj-hunt-winners/winner-1.png')).default;
      const winner2 = (await import('../assets/img/rj-hunt-winners/winner-2.png')).default;
      const winner3 = (await import('../assets/img/rj-hunt-winners/winner-3.png')).default;

      setWinners([winner1, winner2, winner3]);
    };

    importImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed:2000,
    autoplay: true,
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplaySpeed: 4000, // 4 seconds
  };

  return (
    <div className="mt-10" style={{ overflow: 'hidden' }}>
      <div className="self-stretch flex flex-col items-center justify-start gap-[0.56rem]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[1.75rem]">
          <div className="flex flex-col items-center justify-start gap-[0.56rem]">
            <h3 className="m-0 relative text-inherit uppercase font-normal outfit-font text-white">
              testimonials
            </h3>
            <h1 className="m-0 h-[1.88rem] relative text-[1.8rem] font-normal outfit-font text-center inline-block mq450:text-[1.19rem] text-white mb-8">
              RJ Hunt Winners
            </h1>
          </div>
        </div>
      </div>

      <Slider {...settings} className="carousel">
      {winners.map((winner, index) => (
        <img
          key={index}
          src={winner}
          alt={`Winner ${index + 1}`}
          className="winner-image max-h-[15rem] mx-auto object-contain m-[1rem]"
        />
      ))}
    </Slider>
    </div>
  );
};

export default Testimonials;
