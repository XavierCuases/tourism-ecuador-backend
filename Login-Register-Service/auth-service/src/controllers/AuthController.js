const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate the JWT token, including the user's role
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role }, // Include role in the payload
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // Token expiration time
        );

        res.json({
            message: 'Successful authentication',
            token, // Return the generated token
            role: user.role, // Return the user's role for frontend usage
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
