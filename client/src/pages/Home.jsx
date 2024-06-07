import HomePage from '../components/HomePage/HomePage';
import backgroundVideo from '../../public/images/backgroundsvg.mp4';
// import NavBar from '../components/NavBar/NavBar';
// import Footer from '../components/Footer/Footer';

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
      {/* <div className="navbar-sec">
        <NavBar />
      </div> */}
      

      {/* Render the main content */}
      <div className="content">
        <div className="main-content">
          <HomePage />
        </div>
      </div>
      {/* <div className="footer-sec">
        <Footer />
      </div> */}
      
    </div>
  );
};

export default Home;