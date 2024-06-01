// Notes on tracking Animal points

// const animalPoints = {
//     Bear: 0,
//     Jaguar: 0,
//     // Add other animals here
//   };
  
  // Mapping of answers to animal indices
//   const answerToAnimal = {
//     1: 'Bear',
//     2: 'Jaguar',
    // Add other mappings here
//   };

// Functions to track points 

// function updatePoints(answer) {
//     const animal = answerToAnimal[answer];
//     if (animal) {
//       animalPoints[animal]++;
//     }
//   }
  
//   function getResult() {
//     let maxPoints = -1;
//     let userAnimal = null;
    
//     for (const [animal, points] of Object.entries(animalPoints)) {
//       if (points > maxPoints) {
//         maxPoints = points;
//         userAnimal = animal;
//       }
//     }
    
//     return userAnimal;
//   }
  
//   // Example usage:
//   const userAnswers = [1, 2, 1, 1, 2]; // User's answers
  
//   userAnswers.forEach(answer => updatePoints(answer));
  
//   const result = getResult();
//   console.log(`The user's animal is: ${result}`);

// End notes on tracking Animal points
  