// Range system

const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Animal {
    _id: ID
    name: String
    description: String
    image: String
    altText: String
  }

  type Option {
    text: String
    score: Int
  }

  type Question {
    text: String
    options: [Option]
  }

  type Query {
    users: [User]
    user(username: String!): User
    animals: [Animal]
    animal(name: String!): Animal
    questions: [Question]
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    submitQuiz(answers: [Int]!): Animal
  }
`;

module.exports = typeDefs;
