import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import './Quiz.css';

import { useQuery } from '@apollo/client';
import { GET_QUESTIONS } from '../utils/queries';



function Quiz() {
  // import qurey , results animal
const {loading,data} = useQuery(GET_QUESTIONS)

const questions = data?.questions || []
console.log(questions)


const animalRanges = {
  Bear: [12, 21],
  Jaguar: [22, 31],
  Eagle: [32, 41],
  Dolphin: [42, 51],
  Sloth: [52, 61],
  Corgi: [62, 72]
};

  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(''));
  const [totalScore, setTotalScore] = useState(0);

  const handleOptionChange = (event, questionIndex, score) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = event.target.value;
    setSelectedOptions(newSelectedOptions);

    // Update total score
    const newTotalScore = totalScore + score;
    setTotalScore(newTotalScore);
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      // Last question, calculate the result and navigate to the result page
      const result = getResult(totalScore);
      navigate('/result', { state: { result } });
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const getResult = (score) => {
    for (const [animal, range] of Object.entries(animalRanges)) {
      if (score >= range[0] && score <= range[1]) {
        return animal;
      }
    }
    return null;
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-container">
      {/* <NavBar /> */}
      <div className="quiz-content">
        <h1 className="quiz-title">Quiz</h1>
        {currentQuestion < questions.length ? (
          <div className="quiz-card">
            <h2 className="question-text">
              Question {questions[currentQuestion].id}: {questions[currentQuestion].text}
            </h2>
            <ul className="option-list">
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index} className="option-item">
                  <label className="option-label">
                    <input
                      type="radio"
                      name={`answer-${currentQuestion}`}
                      value={option.text}
                      checked={selectedOptions[currentQuestion] === option.text}
                      onChange={(event) => handleOptionChange(event, currentQuestion, option.score)}
                      className="option-input"
                    />
                    <span className="option-text">{option.text}</span>
                  </label>
                </li>
              ))}
            </ul>
            <button className="submit-button" onClick={handleNextQuestion}>
              {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        ) : (
          <div className="quiz-result">
            <h2>Quiz Completed!</h2>
            <p>Your result will be displayed on the result page.</p>
          </div>
        )}
      </div>
      <Footer className='footer' />
    </div>
  );
}

export default Quiz;