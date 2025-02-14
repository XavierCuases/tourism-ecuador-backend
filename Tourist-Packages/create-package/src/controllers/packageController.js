const Package = require('../models/packageModel');

const createPackage = async (req, res) => {
  try {
    const { name, description, price, duration } = req.body;
    
    const newPackage = await Package.create({
      name,
      description,
      price,
      duration
    });
    
    res.status(201).json(newPackage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createPackage };
