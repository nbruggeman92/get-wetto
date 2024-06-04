import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import './Result.css';

function Result() {
  const location = useLocation();
  const { score, totalQuestions } = location.state || {};
  const history = useHistory();

  const handleRestartQuiz = () => {
    history.push('/quiz');
  };

  return (
    <div className="result-container">
      <NavBar />
      <div className="result-content">
        <h1 className="result-title">Quiz Result</h1>
        <div className="result-card">
          <p className="score-text">
            Your Score: {score || 0}/{totalQuestions || 0}
          </p>
          <div className="score-bar-container">
            <div
              className="score-bar"
              style={{ width: `${score && totalQuestions ? (score / totalQuestions) * 100 : 0}%` }}
            ></div>
          </div>
          <p className="message-text">
            {score === totalQuestions
              ? 'Congratulations! You got a perfect score!'
              : 'Well done! Keep practicing to improve your score.'}
          </p>
          <button className="restart-button" onClick={handleRestartQuiz}>
            Restart Quiz
          </button>
        </div>
      </div>
      <Footer className='footer' />
    </div>
  );
}

export default Result;
