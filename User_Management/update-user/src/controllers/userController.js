const { User } = require('../models/UserModel');
const bcrypt = require('bcrypt');

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, role } = req.body;

    try {
        let user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

       
        if (email && email !== user.email) {
            const emailExists = await User.findOne({ where: { email } });
            if (emailExists) {
                return res.status(400).json({ message: 'Email is already in use' });
            }
        }

        user.name = name || user.name;
        user.email = email || user.email;
        if (password) {
            user.password = await bcrypt.hash(password, 10); 
        }

        await user.save();

        const newToken = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET_US,
            { expiresIn: '1h' }
        );

        res.json({
            message: 'User updated successfully',
            token: newToken,
            role: user.role,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating the user' });
    }
};
