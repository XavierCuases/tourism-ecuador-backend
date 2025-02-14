const Package = require('../models/packageModels');
const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.findAll();
    res.json(packages);
  } catch (error) {
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
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPackages,
  getPackageById
};
