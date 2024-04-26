import React from "react";

const MemberCard = ({ name, image}) => {
  return (
    <div className="member m-3" data-aos="fade-up" data-aos-delay="100">
      <div className="member-img flex flex-col items-center relative group">
        <img
          src={image}
          className="h-32 md:h-48 w-32 md:w-48 object-cover mb-2"
          alt={`${name}'s Profile`}
        />
        <div className="overlay opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full flex justify-center items-center">
        </div>
      </div>
      <div className="member-info text-center mt-2">
        <h4 className="text-lg uppercase mb-1 text-[#E8E034] outfit-font">{name}</h4>
      </div>
    </div>
  );
};

export default MemberCard;
