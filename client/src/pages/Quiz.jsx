import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import './Quiz.css';

const questions = [
  {
    id: 1,
    text: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    id: 2,
    text: 'What is the largest planet in our solar system?',
    options: ['Mars', 'Jupiter', 'Saturn', 'Neptune'],
    correctAnswer: 'Jupiter',
  },
    {
    id: 3,
    text: 'What is the capital of India?',
    options: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    correctAnswer: 'Delhi',
    },
    {
    id: 4,
    text: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    correctAnswer: 'Canberra',
    },
    {
    id: 5,
    text: 'What is the capital of United States?',
    options: ['New York', 'Washington D.C.', 'Los Angeles', 'Chicago'],
    correctAnswer: 'Washington D.C.',
    },
    {
    id: 6,
    text: 'What is the capital of United Kingdom?',
    options: ['London', 'Manchester', 'Birmingham', 'Liverpool'],
    correctAnswer: 'London',
    },
    {
    id: 7,
    text: 'What is the capital of Canada?',
    options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
    correctAnswer: 'Ottawa',
    },
    {
    id: 8,
    text: 'What is the capital of Brazil?',
    options: ['Sao Paulo', 'Rio de Janeiro', 'Brasilia', 'Salvador'],
    correctAnswer: 'Brasilia',
    },
    {
    id: 9,
    text: 'What is the capital of Russia?',
    options: ['Moscow', 'Saint Petersburg', 'Kazan', 'Yekaterinburg'],
    correctAnswer: 'Moscow',
    },
    {
    id: 10,
    text: 'What is the capital of China?',
    options: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
    correctAnswer: 'Beijing',
    }
];

function Quiz() {
  const history = useHistory();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(''));

  const handleOptionChange = (event, questionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = event.target.value;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      // Last question, calculate the score and navigate to the result page
      const score = calculateScore();
      history.push('/result', { state: { score, totalQuestions: questions.length } });
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (selectedOptions[index] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="quiz-container">
      <NavBar />
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
                      name="answer"
                      value={option}
                      checked={selectedOptions[currentQuestion] === option}
                      onChange={(event) => handleOptionChange(event, currentQuestion)}
                      className="option-input"
                    />
                    <span className="option-text">{option}</span>
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
            <p>Your score will be displayed on the result page.</p>
          </div>
        )}
      </div>
      <Footer className='footer' />
    </div>
  );
}

export default Quiz;