import React from 'react';
import Button from 'react-bootstrap/Button';
import './HomePage.css';
import { Link } from 'react-router-dom';

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
          <Link to="/quiz"> TAKE THE QUIZ</Link>
        </Button>
      </div>
    </div>
  );
}

export default HomePage;