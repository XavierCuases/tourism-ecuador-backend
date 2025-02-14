const Package = require('../models/packageModels');

const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.findAll();
    if (packages.length === 0) {
      return res.status(404).json({ message: 'No packages found' });
    }
    res.json(packages);
  } catch (error) {
    console.error('Error retrieving packages:', error);  
    res.status(500).json({ message: error.message });
  }
};

const getPackageById = async (req, res) => {
  try {
    const { id } = req.params;
    const package = await Package.findByPk(id);

    if (!package) {
      return res.status(404).json({ message: 'Package not found' });
    }

    res.json(package);
  } catch (error) {
    console.error('Error retrieving package by ID:', error);  
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPackages,
  getPackageById
};
