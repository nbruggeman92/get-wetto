import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./HomePage.css";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";

function HomePage() {
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();
  const handleQuizLogic = () => {
    if (Auth.loggedIn()) {
      navigate("/quiz");
    } else {
      setLoginMessage(
        <p className="login-message">You must be logged in to take the quiz.</p>
      );
    }
  };
  return (
    <div className="homepage-container">
      <div className="background-overlay"></div>
      <div className="content-wrapper">
        <h1 className="animated-heading">COEUS</h1>
        <p className="animated-text">
          Discover the animal within you. Take our quiz and unleash your wild
          side!
        </p>
        <Button variant="danger" size="lg" className="animated-button" onClick={handleQuizLogic}>
          TAKE THE QUIZ
        </Button>
        {loginMessage}
      </div>
    </div>
  );
}

export default HomePage;
