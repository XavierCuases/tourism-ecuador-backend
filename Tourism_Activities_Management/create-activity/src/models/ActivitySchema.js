const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  location: { type: String, required: true }, 
  date: { type: String, required: true },
  description: { type: String }, 
  photos: { type: [String] }, 
  price: { type: Number }, 
});


module.exports = mongoose.model('Activity', ActivitySchema);
