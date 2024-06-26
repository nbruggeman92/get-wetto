const { Schema, model } = require('mongoose');


// Define the animal schema
const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }, 
  altText: {
    type: String,
    required: true
  }
});

// Create the animal model
const Animal = model('Animal', animalSchema);

module.exports = Animal;
