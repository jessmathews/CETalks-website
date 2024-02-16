import React from 'react';
import '../styles/styles.css';

const YoutubeVideoHomePage = () => {
  const latestRelease = {
    title: 'തുരന്നെടുപ്പ് 2023',
    releaseDate: 'Release Date',
    youtubeLink: 'https://www.youtube.com/embed/zyaBW5RCeWU?si=oFHHeK4X42C_-HkO', // Replace with the actual Youtube link
  };

  return (
    <div className="text-center mt-1">
      <h2 className="text-[1.303rem] font-inherit mt-8 text-white outfit-font mq750:gap-[5.88rem] mq1025:gap-[5.88rem] mb-7">featured video</h2>

      {latestRelease && (
        <div className="mx-auto mt-2 p-5 max-w-yif" style={{ backgroundColor: 'rgba(205, 115, 80)', borderRadius: '10px', overflow: 'hidden' }}>
          {/* Embed YouTube video using iframe */}
          <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '56.25%' }}>
            <iframe
              width="100%"
              height="100%"
              src={latestRelease.youtubeLink}
              title={latestRelease.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="responsive-ytiframe-homepage"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default YoutubeVideoHomePage;
