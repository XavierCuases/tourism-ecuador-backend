const mongoose = require('mongoose');

// Define el esquema para las actividades
const ActivitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String },
  photos: { type: [String], default: [] }, // Establece un valor predeterminado vacío
  price: { type: Number },
});

module.exports = mongoose.model('Activity', ActivitySchema);
