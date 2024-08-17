const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signUp = async (request, response) => {
    try {
        const { name, email, password } = request.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        response.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}

exports.signIn = async (request, response) => {
    try {
        const { email, password } = request.body;
        const user = await User.findOne({ email });
        if (!user) return response.status(404).json({ message: 'User not found !' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return response.status(400).json({ message: 'Invalid Password !' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        response.json({ token, user });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};