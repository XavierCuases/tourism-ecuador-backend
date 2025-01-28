const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the activity (required)
  location: { type: String, required: true }, // Location of the activity (required)
  date: { type: String, required: true }, // Date of the activity (required)
});

module.exports = mongoose.model('Activity', ActivitySchema);
