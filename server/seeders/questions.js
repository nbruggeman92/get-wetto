// Point system
const questions = [
    {
      text: 'How do you prefer to spend your free time?',
      options: [
        { text: 'fishing', animalId: 1 }, // bear
        { text: 'running/exercising', animalId: 2 }, // jaguar
        { text: 'flying/aerial sports', animalId: 3 }, // eagle
        { text: 'swimming/water sports', animalId: 4 }, // dolphin
        { text: 'slowly moving around planning the next few steps', animalId: 5 }, // sloth
        { text: 'making educational speed runs', animalId: 6 } // corgi
      ]
    },
    {
      text: 'What is your ideal vacation destination?',
      options: [
        { text: 'Some river nearby', animalId: 1 }, // bear
        { text: 'Somewhere Tropical', animalId: 2 }, // jaguar
        { text: 'National Park', animalId: 3 }, // eagle
        { text: 'A cruise', animalId: 4 }, // dolphin
        { text: 'My couch', animalId: 5 }, // sloth
        { text: 'Silicon Valley', animalId: 6 } // corgi
      ]
    },
    {
        text: 'Which of these best describes your personality?',
        options: [
          { text: 'Aggressive', animalId: 1 }, // bear
          { text: 'Confident', animalId: 2 }, // jaguar
          { text: 'Hipster', animalId: 3 }, // eagle
          { text: 'Intellectual', animalId: 4 }, // dolphin
          { text: 'Lazy', animalId: 5 }, // sloth
          { text: 'Data Driven', animalId: 6 } // corgi
        ]
      },
      {
        text: 'How do you handle stress or difficult situations?',
        options: [
          { text: 'Punch it out', animalId: 1 }, // bear
          { text: 'Go for a run', animalId: 2 }, // jaguar
          { text: 'Ponder at a nice view', animalId: 3 }, // eagle
          { text: 'Swim laps at your favorite pool', animalId: 4 }, // dolphin
          { text: 'Sleep it off', animalId: 5 }, // sloth
          { text: 'Just keep coding', animalId: 6 } // corgi
        ]
      },
      {
        text: 'What is your favorite type of weather?',
        options: [
          { text: 'Sunny', animalId: 1 }, // bear
          { text: 'Scattered Clouds', animalId: 2 }, // jaguar
          { text: 'Breezy', animalId: 3 }, // eagle
          { text: 'Cloudy', animalId: 4 }, // dolphin
          { text: 'Rainy', animalId: 5 }, // sloth
          { text: 'Sunny, but no pollen', animalId: 6 } // corgi
        ]
      },
      {
        text: 'How do you approach new challenges?',
        options: [
          { text: 'As fast as possible', animalId: 1 }, // bear
          { text: 'Follow a plan', animalId: 2 }, // jaguar
          { text: 'Wing it, adjusting as needed', animalId: 3 }, // eagle
          { text: '80% effort, it will all work out', animalId: 4 }, // dolphin
          { text: 'Avoid, avoid, avoid', animalId: 5 }, // sloth
          { text: '1% at a time', animalId: 6 } // corgi
        ]
      },
      {
        text: 'How would your friends describe you?',
        options: [
          { text: 'Protective', animalId: 1 }, // bear
          { text: 'Reliable', animalId: 2 }, // jaguar
          { text: 'Spirited', animalId: 3 }, // eagle
          { text: 'Playful', animalId: 4 }, // dolphin
          { text: 'Easygoing', animalId: 5 }, // sloth
          { text: 'Nerdy', animalId: 6 } // corgi
        ]
      },
      {
        text: 'What is your preferred food experience?',
        options: [
          { text: 'Steak house', animalId: 1 }, // bear
          { text: 'Five star restaurant', animalId: 2 }, // jaguar
          { text: 'Burger joint', animalId: 3 }, // eagle
          { text: 'Sushi', animalId: 4 }, // dolphin
          { text: 'TV dinner', animalId: 5 }, // sloth
          { text: 'Coffee', animalId: 6 } // corgi
        ]
      },
      {
        text: 'Which of these hobbies do you find most interesting?',
        options: [
          { text: 'Cave exploring', animalId: 1 }, // bear
          { text: 'Playing tag', animalId: 2 }, // jaguar
          { text: 'Base jumping', animalId: 3 }, // eagle
          { text: 'Snorkeling', animalId: 4 }, // dolphin
          { text: 'Doing absolutely nothing', animalId: 5 }, // sloth
          { text: 'Coding', animalId: 6 } // corgi
        ]
      },
      {
        text: 'What kind of movies do you enjoy the most?',
        options: [
          { text: 'Slasher', animalId: 1 }, // bear
          { text: 'Thriller', animalId: 2 }, // jaguar
          { text: 'Drama', animalId: 3 }, // eagle
          { text: 'Romantic comedy', animalId: 4 }, // dolphin
          { text: 'Action', animalId: 5 }, // sloth
          { text: 'Coding videos on Youtube', animalId: 6 } // corgi
        ]
      },
      {
        text: 'How would you react to someone invading your territory?',
        options: [
          { text: 'Charge and attack alone', animalId: 1 }, // bear
          { text: 'Stalk and ambush', animalId: 2 }, // jaguar
          { text: 'Let it fly and move somewhere else', animalId: 3 }, // eagle
          { text: 'Defend with the help of friends', animalId: 4 }, // dolphin
          { text: 'Do nothing at all', animalId: 5 }, // sloth
          { text: 'Hack them and steal their data', animalId: 6 } // corgi
        ]
      },
      {
        text: 'How easy is it for you to make new friends?',
        options: [
          { text: 'Depends on the day', animalId: 1 }, // bear
          { text: 'I do not need friends', animalId: 2 }, // jaguar
          { text: 'Somewhat easy', animalId: 3 }, // eagle
          { text: 'Very easy', animalId: 4 }, // dolphin
          { text: 'Friends?...', animalId: 5 }, // sloth
          { text: 'All I need is DATA', animalId: 6 } // corgi
        ]
      },
  ];
  
  module.exports = questions;
  

  // // Range system with utils/quiz.js
  // // adjust scores as we see fit 

  // const questions = [
  //   {
  //     text: 'How do you prefer to spend your free time?',
  //     options: [
  //       { text: 'fishing', score: 1 }, // bear
  //       { text: 'running/exercising', score: 2 }, // jaguar
  //       { text: 'flying/aerial sports', score: 3 }, // eagle
  //       { text: 'swimming/water sports', score: 4 }, // dolphin
  //       { text: 'slowly moving around planning the next few steps', score: 5 }, // sloth
  //       { text: 'making educational speed runs', score: 6 } // corgi
  //     ]
  //   },
  //   // Add rest of questions with similair format as above after decision is made. 
  // ];
  // module.exports = questions;
  