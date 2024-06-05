// Point system
const questions = [
  {
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
  
  module.exports = questions;
  

  // // Range system with utils/quiz.js
  // // adjust scores as we see fit 

