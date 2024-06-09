import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_USER, LOGIN_USER } from "../../utils/mutations";
import "./NavBar.css";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [logout, setLogout] = useState(false);

  const [addUser] = useMutation(ADD_USER);
  const [login] = useMutation(LOGIN_USER);

  useEffect(() => {
    const status = Auth.loggedIn();
    setLogout(status);
  }, []);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }
    if (!isValidPassword(password)) {
      setPasswordError(
        "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
      isValid = false;
    }

    if (isValid && isLogin) {
      login({
        variables: { email, password },
      }).then((response) => {
        console.log(response);
        Auth.login(response.data.login.token);
      });
      setEmail("");
      setPassword("");
      setLogout(true);
    } else if (isValid && !isLogin) {
      addUser({
        variables: { username, email, password },
      }).then((response) => {
        console.log(response);
        Auth.login(response.data.addUser.token);
      });
      setUsername("");
      setEmail("");
      setPassword("");
      setLogout(true);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleLogout = () => {
    Auth.logout();
    setLogout(false);
    window.location.href = "/"; // Redirect to the home page
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
        <div className="navbar-title">
          <Link className="link" to="/">
            COEUS
          </Link>
        </div>
        {logout ? (
          <div
            className={`navbar-button ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleLogout}
          >
            Logout
          </div>
        ) : (
          <div
            className={`navbar-button ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleModalOpen}
          >
            Login/Sign Up
          </div>
        )}
      </div>

      {showModal && (
        <div className={`modal ${showModal ? "modal-open" : ""}`}>
          <div className={`modal-content ${showModal ? "modal-content-open" : ""}`}>
            <h2 className="modal-header">Welcome to COEUS</h2>
            <span className="close-button" onClick={handleModalClose}>
              &times;
            </span>
            <h2 className="modal-title">{isLogin ? "Login" : "Sign Up"}</h2>
            <form className="modal-form" onSubmit={handleSubmit}>
              {isLogin ? (
                <>
                  <input
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Email"
                    className="modal-input"
                    onChange={handleEmailChange}
                  />
                  <input
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Password"
                    className="modal-input"
                    onChange={handlePasswordChange}
                  />
                </>
              ) : (
                <>
                  <input
                    name="username"
                    value={username}
                    type="text"
                    placeholder="Username"
                    className="modal-input"
                    onChange={handleUsernameChange}
                  />
                  <input
                    name="email"
                    value={email}
                    type="email"
                    placeholder="Email"
                    className="modal-input"
                    onChange={handleEmailChange}
                  />
                  <input
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Password"
                    className="modal-input"
                    onChange={handlePasswordChange}
                  />
                </>
              )}
              <button type="submit" className="modal-button">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
            <p className="modal-switch" onClick={toggleForm}>
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Login"}
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;