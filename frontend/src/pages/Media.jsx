// Media.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import Spotify from '../components/SpotifyHomePage';
import Youtube from '../components/YoutubeVideoHomePage';
import MediaIcon from '../components/MediaIcon';
import Spotifypodcast from '../components/Spotifypodcast';

const Media = () => {
  // Your Media component logic
  return (
    <div className="bg-07060e flex flex-col">
    <Header />
    <div className="flex-1 mt-20 bg-07060e">
      {/* Other content for the media page goes here */}
      <Spotify />
      <Spotifypodcast />
      <Youtube />
      <MediaIcon />
      <Footer />
      
    </div>
    
  </div>
  );
};

export default Media;
