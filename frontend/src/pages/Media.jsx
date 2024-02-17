// Media.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import Spotify from '../components/OurPodcastsMedia';
import Youtube from '../components/YoutubeMedia';
import YoutubeFeatured from '../components/FeaturedVideoMedia';
import Followus from '../components/FollowMedia';


const Media = () => {
  // Your Media component logic
  return (
    <div className="bg-07060e flex flex-col">
    <Header />
    <div className="flex-1 mt-20 bg-07060e">
      
      <Spotify />
      <Youtube />
      <YoutubeFeatured />
      <Followus />
      <Footer />
      
    </div>
    
  </div>
  );
};

export default Media;
