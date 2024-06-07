import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';
import { useQuery } from '@apollo/client';
import { GET_QUESTIONS, QUERY_ME } from '../utils/queries';
import { motion } from 'framer-motion';

function Quiz() {
  const { loading, data } = useQuery(GET_QUESTIONS);
  const { loading: loading2, data: data2 } = useQuery(QUERY_ME);

  const questions = data?.questions || [];

  const animalRanges = {
    Bear: [12, 21],
    Jaguar: [22, 31],
    Eagle: [32, 41],
    Dolphin: [42, 51],
    Sloth: [52, 61],
    Corgi: [62, 72],
  };

  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(''));
  const [totalScore, setTotalScore] = useState(0);

  const handleOptionChange = (event, questionIndex, score) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = event.target.value;
    setSelectedOptions(newSelectedOptions);

    const newTotalScore = totalScore + score;
    setTotalScore(newTotalScore);
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      const result = getResult(totalScore);
      navigate(`/result/${data2.me.username}`, { state: { result } });
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

  if (loading || loading2) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      className="quiz-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="quiz-background">
        <motion.img
          src="/images/background.jpg"
          alt="quiz background"
          className="background-image"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="quiz-content">
        <motion.h1
          className="quiz-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          "Quiz"
        </motion.h1>
        {currentQuestion < questions.length ? (
          <motion.div
            className="quiz-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="question-text">
              Question {questions[currentQuestion].id}: {questions[currentQuestion].text}
            </h2>
            <motion.ul
              className="option-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {questions[currentQuestion].options.map((option, index) => (
                <motion.li
                  key={index}
                  className="option-item"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
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
                </motion.li>
              ))}
            </motion.ul>
            <motion.button
              className="submit-button"
              onClick={handleNextQuestion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            className="quiz-result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Quiz Completed!</h2>
            <p>Your result will be displayed on the result page.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default Quiz;