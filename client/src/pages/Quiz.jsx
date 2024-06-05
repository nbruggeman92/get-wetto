import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import './Quiz.css';

const questions = [
  {
    id: 1,
    text: 'How do you prefer to spend your free time?',
    options: [
      { text: 'Fishing', score: 1 }, // bear
      { text: 'Running/exercising', score: 2 }, // jaguar
      { text: 'Flying/aerial sports', score: 3 }, // eagle
      { text: 'Swimming/water sports', score: 4 }, // dolphin
      { text: 'Slowly moving around planning the next few steps', score: 5 }, // sloth
      { text: 'Making educational speed runs', score: 6 } // corgi
    ]
  },
  {
    id: 2,
    text: 'What is your ideal vacation destination?',
    options: [
      { text: 'Some river nearby', score: 1 }, // bear
      { text: 'Somewhere Tropical', score: 2 }, // jaguar
      { text: 'National Park', score: 3 }, // eagle
      { text: 'A cruise', score: 4 }, // dolphin
      { text: 'My couch', score: 5 }, // sloth
      { text: 'Silicon Valley', score: 6 } // corgi
    ]
  },
  {
    id: 3,
    text: 'Which of these best describes your personality?',
    options: [
      { text: 'Aggressive', score: 1 }, // bear
      { text: 'Confident', score: 2 }, // jaguar
      { text: 'Hipster', score: 3 }, // eagle
      { text: 'Intellectual', score: 4 }, // dolphin
      { text: 'Lazy', score: 5 }, // sloth
      { text: 'Data Driven', score: 6 } // corgi
    ]
  },
  {
    id: 4,
    text: 'How do you handle stress or difficult situations?',
    options: [
      { text: 'Punch it out', score: 1 }, // bear
      { text: 'Go for a run', score: 2 }, // jaguar
      { text: 'Ponder at a nice view', score: 3 }, // eagle
      { text: 'Swim laps at your favorite pool', score: 4 }, // dolphin
      { text: 'Sleep it off', score: 5 }, // sloth
      { text: 'Just keep coding', score: 6 } // corgi
    ]
  },
  {
    id: 5,
    text: 'What is your favorite type of weather?',
    options: [
      { text: 'Sunny', score: 1 }, // bear
      { text: 'Scattered Clouds', score: 2 }, // jaguar
      { text: 'Breezy', score: 3 }, // eagle
      { text: 'Cloudy', score: 4 }, // dolphin
      { text: 'Rainy', score: 5 }, // sloth
      { text: 'Sunny, but no pollen', score: 6 } // corgi
    ]
  },
  {
    id: 6,
    text: 'How do you approach new challenges?',
    options: [
      { text: 'As fast as possible', score: 1 }, // bear
      { text: 'Follow a plan', score: 2 }, // jaguar
      { text: 'Wing it, adjusting as needed', score: 3 }, // eagle
      { text: '80% effort, it will all work out', score: 4 }, // dolphin
      { text: 'Avoid, avoid, avoid', score: 5 }, // sloth
      { text: '1% at a time', score: 6 } // corgi
    ]
  },
  {
    id: 7,
    text: 'How would your friends describe you?',
    options: [
      { text: 'Protective', score: 1 }, // bear
      { text: 'Reliable', score: 2 }, // jaguar
      { text: 'Spirited', score: 3 }, // eagle
      { text: 'Playful', score: 4 }, // dolphin
      { text: 'Easygoing', score: 5 }, // sloth
      { text: 'Nerdy', score: 6 } // corgi
    ]
  },
  {
    id: 8,
    text: 'What is your preferred food experience?',
    options: [
      { text: 'Steak house', score: 1 }, // bear
      { text: 'Five star restaurant', score: 2 }, // jaguar
      { text: 'Burger joint', score: 3 }, // eagle
      { text: 'Sushi', score: 4 }, // dolphin
      { text: 'TV dinner', score: 5 }, // sloth
      { text: 'Coffee', score: 6 } // corgi
    ]
  },
  {
    id: 9,
    text: 'Which of these hobbies do you find most interesting?',
    options: [
      { text: 'Cave exploring', score: 1 }, // bear
      { text: 'Playing tag', score: 2 }, // jaguar
      { text: 'Base jumping', score: 3 }, // eagle
      { text: 'Snorkeling', score: 4 }, // dolphin
      { text: 'Doing absolutely nothing', score: 5 }, // sloth
      { text: 'Coding', score: 6 } // corgi
    ]
  },
  {
    id: 10,
    text: 'What kind of movies do you enjoy the most?',
    options: [
      { text: 'Slasher', score: 1 }, // bear
      { text: 'Thriller', score: 2 }, // jaguar
      { text: 'Drama', score: 3 }, // eagle
      { text: 'Romantic comedy', score: 4 }, // dolphin
      { text: 'Action', score: 5 }, // sloth
      { text: 'Coding videos on YouTube', score: 6 } // corgi
    ]
  },
  {
    id: 11,
    text: 'How would you react to someone invading your territory?',
    options: [
      { text: 'Charge and attack alone', score: 1 }, // bear
      { text: 'Stalk and ambush', score: 2 }, // jaguar
      { text: 'Let it fly and move somewhere else', score: 3 }, // eagle
      { text: 'Defend with the help of friends', score: 4 }, // dolphin
      { text: 'Do nothing at all', score: 5 }, // sloth
      { text: 'Hack them and steal their data', score: 6 } // corgi
    ]
  },
  {
    id: 12,
    text: 'How easy is it for you to make new friends?',
    options: [
      { text: 'Depends on the day', score: 1 }, // bear
      { text: 'I do not need friends', score: 2 }, // jaguar
      { text: 'Somewhat easy', score: 3 }, // eagle
      { text: 'Very easy', score: 4 }, // dolphin
      { text: 'Friends?...', score: 5 }, // sloth
      { text: 'All I need is DATA', score: 6 } // corgi
    ]
  }
];

const animalRanges = {
  Bear: [12, 21],
  Jaguar: [22, 31],
  Eagle: [32, 41],
  Dolphin: [42, 51],
  Sloth: [52, 61],
  Corgi: [62, 72]
};


function Quiz() {
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