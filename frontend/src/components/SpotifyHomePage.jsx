import React from 'react';
import spotify2 from '../assets/img/social-icons/spotify@2x.png';

const SpotifyHomePage = () => {
  const latestRelease = {
    title: 'Latest Release Title',
    releaseDate: 'Release Date',
    spotifyLink: 'https://open.spotify.com/embed/episode/2npayuoKczPJUc604fL1zs?utm_source=generator&t=0', // Replace with the actual Spotify link
  };

  return (
    <div className="text-center mt-40">
      <h2 className="text-[1.303rem] font-inherit mt-8 text-white outfit-font mq750:gap-[5.88rem] mq1025:gap-[5.88rem] mb-7">latest on <img src={spotify2} alt="Spotify Icon" className="inline-block h-[1.13rem] w-[1.13rem]" /></h2>

      {latestRelease && (
        <div className="mx-auto mt-4 p-5 max-w-sif" style={{ backgroundColor: 'rgba(196, 51, 52)', borderRadius: '12px', overflow: 'hidden' }}>
          <iframe 
            style={{ borderRadius: '12px' }}
            src={latestRelease.spotifyLink}
            width="100%" 
            height="155" 
            frameBorder="0" 
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default SpotifyHomePage;
