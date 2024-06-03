//Added 6/1, for Cliff to see

// utils/quiz.js
const animalPoints = {
    Bear: 0,
    Jaguar: 0,
    Eagle: 0,
    Dolphin: 0,
    Sloth: 0,
    Corgi: 0
  };
  
  const answerToAnimal = {
    1: 'Bear',
    2: 'Jaguar',
    3: 'Eagle',
    4: 'Dolphin',
    5: 'Sloth',
    6: 'Corgi'
  };
  
  function updatePoints(answer) {
    const animal = answerToAnimal[answer];
    if (animal) {
      animalPoints[animal]++;
    }
  }
  
  function getResult() {
    let maxPoints = -1;
    let userAnimal = null;
  
    for (const [animal, points] of Object.entries(animalPoints)) {
      if (points > maxPoints) {
        maxPoints = points;
        userAnimal = animal;
      }
    }
  
    return userAnimal;
  }
  
  function resetPoints() {
    for (const animal in animalPoints) {
      animalPoints[animal] = 0;
    }
  }
  
  module.exports = {
    updatePoints,
    getResult,
    resetPoints
  };
  