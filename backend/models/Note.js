const mongoose = require('mongoose');

// Schema definition for the 'Note' model
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Model creation
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
