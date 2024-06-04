const { Schema, model } = require('mongoose');

const optionSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  animalId: {
    type: Number,
    required: true,
  },
});

const questionSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  options: [optionSchema],
});

const Question = model('Question', questionSchema);

module.exports = Question;
