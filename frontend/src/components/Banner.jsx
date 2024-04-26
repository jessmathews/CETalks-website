// Banner.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Banner.css';
import cetalkslogo from '../assets/img/general/cetalks-logo@2x.png';

const ButtonLink = ({ to, children, className }) => (
  <Link to={to} className={`cursor-pointer ${className}`}>
    {children}
  </Link>
);

const Banner = () => {
  return (
    <div className="bg-07060e p-8 md:p-12 lg:p-16 overflow-hidden">
    <section className="w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-4 md:gap-8 max-w-full min-w-[280px] text-center md:text-left text-white ">
      <div className="w-full md:w-[38.44rem] text-inherit relative inline-block shrink-0 min-w-[20.44rem] max-w-sec1 leading-intro-heading text-font-size-intro mb-4 md:mb-0 text-left">
        <h1 className="text-5xl py-1 bg-gradient-to-r from-[#E8E034] to-[#C83134] bg-clip-text text-transparent inline-block font-semibold">CETALKS</h1>
        <h1 className="text-2xl py-1">The official campus radio of</h1>
        <h1 className="text-5xl/[60px] py-1 ">College Of Engineering Trivandrum</h1>
      </div>

        <div className="hidden xl:block">
          <img src={cetalkslogo} alt="CETalks Logo" className="logo-image-size" />
        </div>
      </section>

      <section className="w-[61rem] flex flex-col items-start justify-start gap-[5.88rem] max-w-full text-left text-[1rem] text-white outfit-font flex-wrap mt-10">
        <div className="flex flex-row items-start justify-start gap-[0.94rem] max-w-full mq450:flex-wrap">
          <ButtonLink
            to="/spotlight"
            className="bg-firebrick-100 rounded-xl hover:bg-salmon-100 flex items-center justify-center pt-[0.5rem] pb-[0.5rem] pr-[2rem] pl-[2rem] md:pt-[0.81rem] md:pb-[0.88rem] md:pr-[3.75rem] md:pl-[3.63rem]"
          >
            <div className="h-[2.63rem] w-[10.31rem] relative rounded-xl bg-firebrick-100 hidden" />
            <div className="relative text-[0.75rem] font-outfit text-white text-left z-[1]">
              Spotlight
            </div>
          </ButtonLink>
          <ButtonLink
            to="/events"
            className="bg-[transparent] rounded-xl border-[1px] border-solid border-firebrick-100 hover:bg-salmon-200 hover:border-salmon-100 flex items-center justify-center pt-[0.5rem] pb-[0.5rem] pr-[2.5rem] pl-[2.5rem] md:pt-[0.81rem] md:pb-[0.88rem] md:pr-[4.19rem] md:pl-[3.94rem]"
          >
            <div className="h-[2.63rem] w-[10.31rem] relative rounded-xl box-border hidden border-[1px] border-solid border-firebrick-100" />
            <div className="relative text-[0.75rem] font-outfit text-white text-left z-[1]">
              Events
            </div>
          </ButtonLink>
        </div>
      </section>
    </div>
  );
};

export default Banner;
