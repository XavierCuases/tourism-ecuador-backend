const bcrypt = require('bcrypt');
const User = require('../models/UserModel');

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validar datos básicos
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Verificar si el email ya está registrado
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'The email is already registered' });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear usuario
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
