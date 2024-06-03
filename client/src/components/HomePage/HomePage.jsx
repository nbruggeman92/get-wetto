import React from 'react';
import Button from 'react-bootstrap/Button';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="background-overlay"></div>
      <div className="content-wrapper">
        <h1 className="animated-heading">COEUS</h1>
        <p className="animated-text">
          Discover the animal within you. Take our quiz and unleash your wild side!
        </p>
        <Button variant="danger" size="lg" className="animated-button">
          TAKE THE QUIZ
        </Button>
      </div>
    </div>
  );
}

export default HomePage;