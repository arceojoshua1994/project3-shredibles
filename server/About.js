const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
  tech1: {
    type: String,
    required: true,
  },
  tech2: {
    type: String,
    required: true,
  },
  tech1_votes: {
    type: Number,
    default: 0,
  },
  tech2_votes: {
    type: Number,
    default: 0,
  },
});

const Category = model('Category', CategorySchema);

module.exports = Category;
