const mongoose = require("mongoose");

const pathologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  imageHash: {
    type: String,
    required: true,
  },
});

module.exports = pathologySchema;
