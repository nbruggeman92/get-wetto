import HomePage from '../components/HomePage/HomePage';
import backgroundVideo from '../images/backgroundsvg.mp4';

import './home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Render the background video */}
      <div className="background-container">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          src={backgroundVideo}
        />
      </div>

      {/* Render the main content */}
      <div className="content">
        <div className="main-content">
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default Home;