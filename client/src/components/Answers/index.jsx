import React, { useState } from 'react';

const AnimalQuiz = () => {
  // Define state variables to track current question and user answers
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  // Define quiz questions and options
  const questions = [
    {
      question: "What is your favorite color?",
      options: ["Red", "Blue", "Green", "Yellow"]
    },
    {
      question: "What is your favorite activity?",
      options: ["Running", "Swimming", "Exploring", "Sleeping"]
    },
    {
      question: "Pick a food:",
      options: ["Steak", "Fish", "Salad", "Pizza"]
    },
    // Add more questions as needed
  ];

  // Function to handle selecting an answer
  const handleAnswerSelect = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  // Function to move to the next question
  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  // Render quiz question and options
  return (
    <div>
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswerSelect(option)}>
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Complete!</h2>
          <p>Your answers: {answers.join(", ")}</p>
          {/* Add logic to calculate result based on answers */}
        </div>
      )}
    </div>
  );
};

export default AnimalQuiz;