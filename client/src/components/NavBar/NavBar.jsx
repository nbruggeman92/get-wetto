import React, { useState } from 'react';
import './NavBar.css';

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Helper function to validate password strength
const isValidPassword = (password) => {
  // Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // ... (other functions)

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password
    let isValid = true;
    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }
    if (!isValidPassword(password)) {
      setPasswordError('Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
      isValid = false;
    }

    // If form is valid, you can handle the login or sign-up logic here
    if (isValid) {
      console.log('Form is valid');
      // ... (login or sign-up logic)
    }
  };


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">COEUS</div>
        <div
          className={`navbar-button ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleModalOpen}
        >
          Login/Sign Up
        </div>
      </div>

      {showModal && (
        <div className={`modal ${showModal ? 'modal-open' : ''}`}>
          <div className={`modal-content ${showModal ? 'modal-content-open' : ''}`}>
            <h2 className="modal-header">Welcome to COEUS</h2>
            <span className="close-button" onClick={handleModalClose}>
              &times;
            </span>
            <h2 className="modal-title">{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form className="modal-form">
              {isLogin ? (
                <>
                  <input type="email" placeholder="Email" className="modal-input" />
                  <input type="password" placeholder="Password" className="modal-input" />
                </>
              ) : (
                <>
                  <input type="text" placeholder="Username" className="modal-input" />
                  <input type="email" placeholder="Email" className="modal-input" />
                  <input type="password" placeholder="Password" className="modal-input" />
                </>
              )}
              <button type="submit" className="modal-button">
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>
            <p className="modal-switch" onClick={toggleForm}>
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;