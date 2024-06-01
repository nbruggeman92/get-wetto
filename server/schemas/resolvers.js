const { User, Thought } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { updatePoints, getResult, resetPoints } = require('../utils/quiz'); // Added 6/1

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
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
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
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