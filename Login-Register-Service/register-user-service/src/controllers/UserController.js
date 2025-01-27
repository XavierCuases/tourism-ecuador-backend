const bcrypt = require('bcrypt');
const User = require('../models/UserModel');

// User registration handler
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Log all request headers for debugging purposes
        console.log('Request Headers:', req.headers);

        // Log the Admin-Token received and the expected token
        console.log('Admin-Token received:', req.header('Admin-Token'));
        console.log('Expected Admin-Token:', process.env.ADMIN_TOKEN);

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

        // Validate Admin-Token and assign role
        const isAdminAuthorized = req.header('Admin-Token') === process.env.ADMIN_TOKEN;

        // Log to check admin authorization status
        console.log('Is admin authorized:', isAdminAuthorized);

        // Determine the role to assign (default to 'user' if not admin or token invalid)
        const assignedRole = isAdminAuthorized && role === 'admin' ? 'admin' : 'user';

        // Log the assigned role for debugging
        console.log('Assigned role:', assignedRole);

        // Create the user in the database
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role: assignedRole,
        });

        // Respond with success
        res.status(201).json({
            message: 'User successfully registered',
            userId: newUser.id,
            role: newUser.role,
        });
    } catch (error) {
        console.error('Error during registration:', error);

        // Respond with an error message
        res.status(500).json({ error: 'Error registering user' });
    }
};
