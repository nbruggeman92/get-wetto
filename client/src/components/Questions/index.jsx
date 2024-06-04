import React, { useState } from 'react';

const questions = [
    {
        question: "How do you prefer to spend your free time?",
        options: ["Fishing (bear)", "Running/exercising (jaguar)", "Flying/aerial sports (eagle)", "Swimming/water sports (dolphin)", "Slowly moving around planning the next few steps (sloth)", "Making educational speed runs (corgi)"],
    },
    {
        question: "What's your ideal vacation destination?",
        options: ["A nearby river (bear)", "Somewhere Tropical (jaguar)", "National Park", "A cruise (dolphin)", "My couch (sloth)", "Silicon Valley (corgi)"],
    },
    {
        question: "Which of these best describes your personality?",
        options: ["Aggressive (bear)", "Confident (jaguar)", "Hipster (eagle)", "Intellectual (dolphin)", "Lazy (sloth)", "Data Driven (corgi)"],
    },
    {
        question: "How do you handle stress or difficult situations?",
        options: ["Punch it out (bear)", "Go for a run (jaguar)", "Ponder at a nice view (eagle)", "Swim laps at a pool (dolphin)", "Sleep it off (sloth)", "Just keep coding (corgi)"],
    },
    {
        question: "What's your favorite type of weather?",
        options: ["Sunny (bear)", "Scattered Clouds (jaguar)", "Breezy (eagle)", "Cloudy (dolphin)", "Rainy (sloth)", "Sunny but no pollen (corgi)"],
    },
    {
        question: "How do you approach new challenges?",
        options: ["As fast as possible (bear)", "Follow a plan (jaguar)", "Wing it, adjusting as needed (eagle)", "80% effort, it will all work out (dolphin)", "Avoid, avoid, avoid (sloth)", "1% at a time.(corgi)"],
    },
    {
        question: "How would your friends describe you?",
        options: ["Protective (bear)", "Reliable (jaguar)", "Spirited (eagle)", "Playful (dolphin)", "Easygoing (sloth)", "Nerdy (corgi)"],
    },
    {
        question: "What's your preferred food experience?",
        options: ["Steak house (bear)", "Five star restaurant (jaguar)", "Burger joint (eagle)", "Sushi (dolphin)", "TV dinner (sloth)", "Coffee (corgi)"],
    },
    {
        question: "Which of these hobbies do you find most interesting?",
        options: ["Cave exploring (bear)", "Playing tag (jaguar)", "BASE jumping (eagle)", "Snorkeling (dolphin)", "Doing absolutely nothing (sloth)", "Coding (corgi)"],
    },
    {
        question: "What kind of movies do you enjoy the most?",
        options: ["Slasher (bear)", "Thriller (jaguar)", "Drama (eagle)", "Rom com (dolphin)", "Action (sloth)", "Coding videos on youtube (corgi)"],
    },
    {
        question: "How would you react to someone invading your territory?",
        options: ["Charge and attack (bear)", "Stalk and ambush (jaguar)", "Let it fly and move somewhere else (eagle)", "Defend with the help of friends (dolphin)", "Do nothing at all (sloth)", "Hack them and steal their data (corgi)"],
    },
    {
        question: "How easy is it for you to make new friends?",
        options: ["Depends on the day (bear)", "I don't need friends (jaguar)", "Somewhat easy (eagle)", "Very easy (dolphin)", "Friends?... (sloth)", "All i need is DATA (corgi)"],
    }
];

function AnimalQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (selectedAnswer) => {
        setSelectedOption(selectedAnswer);
        if (selectedAnswer === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedOption('');
    };

    return (
        <div className="animal-quiz">
            {showScore ? (
                <div className="quiz-results">
                    <h2>Your Score: {score} out of {questions.length}</h2>
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <div className="quiz-question">
                    <h2>Question {currentQuestion + 1}</h2>
                    <p>{questions[currentQuestion].question}</p>
                    <ul>
                        {questions[currentQuestion].options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className={selectedOption === option ? "selected" : ""}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default AnimalQuiz;