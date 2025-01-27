const bcrypt = require('bcrypt');
const User = require('../models/UserModel');

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;


        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'The email is already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            message: 'Successfully registered user',
            userId: newUser.id,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error registering user' });
    }
};
