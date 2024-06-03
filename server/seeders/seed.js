const db = require("../config/connection");
const { User, Question } = require("../models");
const userSeeds = require("./userSeeds.json");
const questions = require("./questions");
const cleanDB = require("./cleanDB");

// Added and edited 6/3
db.once("open", async () => {
  try {
    await cleanDB("User", "users");
    await cleanDB("Question", "questions");

    // Create users from seed data
    await User.create(userSeeds);

    // Create questions from the seed data
    await Question.insertMany(questions);

    console.log("All done!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
