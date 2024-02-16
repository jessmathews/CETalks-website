import React from "react";
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

const MemberCard = ({ name, position, image, instagram, linkedin }) => {
  return (
    <div className="member" data-aos="fade-up" data-aos-delay="100">
      <div className="member-img flex flex-col items-center relative group">
        <img
          src={image}
          className="h-32 md:h-48 w-32 md:w-48 object-cover rounded-full border-white border-2 mb-2"
          alt={`${name}'s Profile`}
        />
        <div className="overlay opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="social-icons mt-2 flex">
            {instagram && (
              <a href={instagram} className="text-red-600 mx-3">
                <BsInstagram />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} className="text-red-600 mx-3">
                <BsLinkedin />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="member-info text-center mt-2">
        <h4 className="text-lg font-semibold mb-1 text-white">{name}</h4>
        <span className="text-white">{position}</span>
      </div>
    </div>
  );
};

export default MemberCard;
