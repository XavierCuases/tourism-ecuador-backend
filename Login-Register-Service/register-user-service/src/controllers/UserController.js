const bcrypt = require('bcrypt');
const User = require('../models/UserModel');

// User registration handler
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Validate required fields
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'The email is already registered' });
        }

        // Encrypt the user's password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Validate if the requester is authorized to assign roles (only for admins)
        const isAdminAuthorized = req.header('Admin-Token') === process.env.ADMIN_TOKEN;

        // Assign role based on authorization; default to "user"
        const assignedRole = isAdminAuthorized && role ? role : 'user';

        // Create the new user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role: assignedRole, // Include the role in the user creation
        });

        res.status(201).json({
            message: 'Successfully registered user',
            userId: newUser.id,
            role: newUser.role, // Return the role in the response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error registering user' });
    }
};
