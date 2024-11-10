import React from "react";
import instagram2 from '../assets/img/social-icons/instagram-media.svg';
import youtube2 from '../assets/img/social-icons/youtube-media.svg';
import spotify2 from '../assets/img/social-icons/spotify-media.svg';

const FollowMedia = () => {
  const socialLinks = [
    {
      name: "Spotify",
      icon: spotify2,
      link: "https://open.spotify.com/show/5AGpr7Sd0kjciMAFxSuC0y",
    },
    {
      name: "YouTube",
      icon: youtube2,
      link: "https://www.youtube.com/@CETALKS",
    },
    {
      name: "Instagram",
      icon: instagram2,
      link: "https://www.instagram.com/cetalks/",
    },
  ];

  return (
    <section className="max-w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-5xl mx-auto text-center"> {/* Centering the text */}
        <div className="mb-4 text-white outfit-font">
        <h2 className="text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-inherit mt-8 text-white outfit-font mq750:gap-[5.88rem] mq1025:gap-[5.88rem] mb-7">Follow Us On</h2>
        </div>

        <div className="flex justify-center items-center gap-24 md:gap-36 lg:gap-40"> {/* Increased gap between icons */}
          {socialLinks.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="text-white">
              <img src={social.icon} alt={`${social.name} Icon`} className="h-16 w-16" /> {/* Larger icons */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowMedia;
