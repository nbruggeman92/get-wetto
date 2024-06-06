// const { User, Animal, Question } = require('../models');
// const { signToken, AuthenticationError } = require('../utils/auth');

// // Point system
// const resolvers = {
//   Query: {
//     users: async () => {
//       return User.find();
//     },
//     user: async (parent, { username }) => {
//       return User.findOne({ username });
//     },
//     animals: async () => {
//       return Animal.find();
//     },
//     animal: async (parent, { name }) => {
//       return Animal.findOne({ name });
//     },
//     questions: async () => { 
//       return Question.find();
//     }
//   },
  
//   Mutation: {
//     addUser: async (parent, { username, email, password }) => {
//       const user = await User.create({ username, email, password });
//       const token = signToken(user);
//       return { token, user };
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError('Incorrect Credentials');
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect Credentials');
//       }

//       const token = signToken(user);

//       return { token, user };
//     },
//     submitQuiz: (_, { answers }) => {
//       // Reset points for a new quiz
//       resetPoints();

//       // Update points based on answers
//       answers.forEach(answer => updatePoints(answer));

//       // Get the result
//       return getResult();
//     }
//   },
// };

// module.exports = resolvers;

// Range system 

const { User, Animal } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { updateScore, getResult, resetScore } = require('../utils/quiz');
const questions = require('../seeders/questions'); // Ensure this import is correct

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    animals: async () => {
      return Animal.find();
    },
    animal: async (parent, { name }) => {
      return Animal.findOne({ name });
    },
    questions: async () => {
      return questions;
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    submitQuiz: (_, { answers }) => {
      // Reset score for a new quiz
      resetScore();

      // Update score based on answers
      answers.forEach(answer => updateScore(answer));

      // Get the result
      const result = getResult();

      // Find the corresponding animal
      return Animal.findOne({ name: result });
    }
  }
};

module.exports = resolvers;
