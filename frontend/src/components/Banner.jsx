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
    <div className="bg-07060e margin-left-intro margin-top-intro mr-40">
    <section className="w-full flex flex-row items-end justify-between gap-[1.25rem] max-w-full min-w-[380px] text-left text-white outfit-font">
      <h1 className="w-[38.44rem] relative text-inherit font-bold font-outfit inline-block shrink-0 min-w-[20.44rem] max-w-sec1 leading-intro-heading text-font-size-intro">
        CETALKS, the official campus radio of College Of Engineering Trivandrum
      </h1>

      <div className="hidden xl:block"> {/* Show only for screen widths larger than 1100px */}
        <img src={cetalkslogo} alt="CETalks Logo" className="logo-image-size" />
      </div>
    </section>
      <section className="w-[61rem] flex flex-col items-start justify-start gap-[5.88rem] max-w-full text-left text-[1rem] text-white outfit-font flex-wrap mt-10">
        <div className="flex flex-row items-start justify-start gap-[0.94rem] max-w-full mq450:flex-wrap">
          <ButtonLink
            to="/spotlight"
            className="bg-firebrick-100 rounded-xl hover:bg-salmon-100 flex items-center justify-center pt-[0.81rem] pb-[0.88rem] pr-[3.75rem] pl-[3.63rem]"
          >
            <div className="h-[2.63rem] w-[10.31rem] relative rounded-xl bg-firebrick-100 hidden" />
            <div className="relative text-[0.75rem] font-outfit text-white text-left z-[1]">
              Spotlight
            </div>
          </ButtonLink>
          <ButtonLink
            to="/events"
            className="bg-[transparent] rounded-xl border-[1px] border-solid border-firebrick-100 hover:bg-salmon-200 hover:border-salmon-100 flex items-center justify-center pt-[0.81rem] pb-[0.88rem] pr-[4.19rem] pl-[3.94rem]"
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
