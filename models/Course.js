const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CourseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean
  },
  tags: {
    type: [String]
  },

  youtube: {
    type: String
  },

  published: {
    type: Date,
    default: Date.now
  }
});

module.exports = Course = mongoose.model("courses", CourseSchema);
