const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter category name']
  },
  image: {
    type: String,
    required: [true, 'please upload an image']
  },
});

module.exports = mongoose.model('Category', categorySchema);
