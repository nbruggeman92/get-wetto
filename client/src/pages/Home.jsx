import HomePage from '../components/HomePage/HomePage';
import backgroundVideo from '../../public/images/backgroundsvg.mp4';
import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home">
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
      <div className="content">
        <motion.div
          className="main-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HomePage />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;