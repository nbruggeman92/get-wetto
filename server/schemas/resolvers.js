const { User, Animal } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { updatePoints, getResult, resetPoints } = require('../utils/quiz'); // Added 6/1
const questions = require('../seeders/questions'); // Added 6/3

// Edited 6/3
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
    questions: async () => {  // Added 6/3
      return questions;
    }
  },

// Edited 6/3  
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
    submitQuiz: (_, { answers }) => {  // Added 6/1
      // Reset points for a new quiz
      resetPoints();

      // Update points based on answers
      answers.forEach(answer => updatePoints(answer));

      // Get the result
      return getResult();
    }
  },
};

module.exports = resolvers;