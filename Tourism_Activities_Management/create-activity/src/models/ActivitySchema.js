const mongoose = require('mongoose');

// Define the schema for the Activity collection
const ActivitySchema = new mongoose.Schema({
  name: { type: String, required: true }, // Activity name (required)
  location: { type: String, required: true }, // Activity location (required)
  date: { type: String, required: true }, // Activity date (required)
  description: { type: String }, // Optional activity description
  photos: { type: [String] }, // Array of URLs for activity photos
  price: { type: Number }, // Optional price for the activity
});

// Export the Activity model to interact with MongoDB
module.exports = mongoose.model('Activity', ActivitySchema);
