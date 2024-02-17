// Footer.jsx
import React from 'react';
import youtube2 from '../assets/img/social-icons/youtube@2x.png';
import copyright2 from '../assets/img/social-icons/copyright@2x.png';
import facebook2 from '../assets/img/social-icons/facebook@2x.png';
import instagram2 from '../assets/img/social-icons/instagram@2x.png';
import twitterx2 from '../assets/img/social-icons/twitterx@2x.png';
import spotify12 from '../assets/img/social-icons/spotify-1@2x.png';


const Footer = () => {
  return (
    <div className="bg-07060e text-white p-4 bottom-0 w-full mt-3">
      <div className="container mx-auto flex flex-row items-start justify-start gap-[0.44rem] max-w-full text-center text-[0.69rem] font-outfit">
        <div className="flex-1 flex flex-col items-center justify-start gap-[1.31rem] min-w-[13.06rem] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center gap-[0.38rem] flex-wrap">
            {/* Twitter icon */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
                className="self-stretch w-[3.43rem] sm:w-[6.43rem] relative max-h-full object-cover min-h-[1.88rem]"
                loading="lazy"
                alt=""
                src={twitterx2}
            />
            </a>

            {/* Facebook icon */}
            <a href="https://www.facebook.com/CETalks/" target="_blank" rel="noopener noreferrer">
            <img
                className="self-stretch w-[3.43rem] sm:w-[6.43rem] relative max-h-full object-cover min-h-[1.88rem]"
                loading="lazy"
                alt=""
                src={facebook2}
            />
            </a>

            {/* Spotify icon */}
            <a href="https://open.spotify.com/show/5AGpr7Sd0kjciMAFxSuC0y" target="_blank" rel="noopener noreferrer">
            <img
                className="self-stretch w-[3.43rem] sm:w-[6.43rem] relative max-h-full object-cover min-h-[1.88rem]"
                loading="lazy"
                alt=""
                src={spotify12}
            />
            </a>

            {/* YouTube icon */}
            <a href="https://www.youtube.com/@CETALKS" target="_blank" rel="noopener noreferrer">
            <img
                className="self-stretch w-[3.43rem] sm:w-[6.43rem] relative max-h-full object-cover min-h-[1.88rem]"
                loading="lazy"
                alt=""
                src={youtube2}
            />
            </a>

            {/* Instagram icon */}
            <a href="https://www.instagram.com/cetalks/" target="_blank" rel="noopener noreferrer">
            <img
                className="self-stretch w-[3.43rem] sm:w-[6.43rem] relative max-h-full object-cover min-h-[1.88rem]"
                loading="lazy"
                alt=""
                src={instagram2}
            />
            </a>

          </div>

          <div className="flex flex-row items-center justify-start gap-[0.06rem]">
            {/* Copyright icon */}
            <img
              className="h-[0.63rem] w-[0.63rem] relative object-cover"
              loading="lazy"
              alt=""
              src={copyright2}
            />
            <div className="relative uppercase">Copyright Cetalks 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
