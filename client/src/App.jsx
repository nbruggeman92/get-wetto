import { useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import background from './images/backgroundsvg.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <video className="background-video" autoPlay loop muted playsInline playbackRate={0.1}>
  <source src={background} type="video/mp4" />
</video>
      <div className="content">
        <NavBar />
        <div className="homepage-wrapper">
          <HomePage />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;