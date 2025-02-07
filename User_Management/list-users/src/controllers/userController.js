const { User } = require('../models/userModel');
exports.listUsers = async (req, res) => {
    try {
        const users = await User.findAll();  
        res.status(200).json(users); 
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error });
    }
};
