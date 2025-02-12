const { User } = require('../models/userModel');

exports.listUsers = async (req, res) => {
    try {
        const userId = req.params.id;  
        if (userId) {
          
            const user = await User.findOne({ where: { id: userId } });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.status(200).json(user); 
        } else {
            
            const users = await User.findAll();
            return res.status(200).json(users); 
        }
    } catch (error) {
        return res.status(500).json({ message: "Error retrieving users", error });
    }
};
