const bcrypt = require('bcrypt');
const User = require('../models/UserModel');

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        console.log('[DEBUG] Request Headers:', req.headers);

        console.log('[DEBUG] Admin-Token received:', req.header('Admin-Token'));
        console.log('[DEBUG] Expected Admin-Token:', process.env.ADMIN_TOKEN_US); 

        if (!name || !email || !password) {
            console.error('[ERROR] Missing required fields.');
            return res.status(400).json({ error: 'All fields are required' });
        }

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            console.error('[ERROR] Email already registered:', email);
            return res.status(400).json({ error: 'The email is already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const isAdminAuthorized = req.header('Admin-Token') === process.env.ADMIN_TOKEN_US;

        console.log('[DEBUG] Is admin authorized:', isAdminAuthorized);

        const assignedRole = isAdminAuthorized && role === 'admin' ? 'admin' : 'user';

        console.log('[DEBUG] Assigned role:', assignedRole);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role: assignedRole,
        });

        console.log('[INFO] User successfully registered:', {
            userId: newUser.id,
            role: newUser.role,
        });
        res.status(201).json({
            message: 'User successfully registered',
            userId: newUser.id,
            role: newUser.role,
        });
    } catch (error) {
        console.error('[ERROR] Error during registration:', error);
        res.status(500).json({ error: 'Error registering user' });
    }
};
