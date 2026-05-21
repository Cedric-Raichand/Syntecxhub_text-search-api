const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },

  tags: {
    type: [String],
    default: []
  }

}, {
  timestamps: true
});


// FULL TEXT INDEX
PostSchema.index({
  title: "text",
  body: "text"
});

module.exports = mongoose.model("Post", PostSchema);