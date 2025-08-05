const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

let users = [];

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const existing = users.find(u => u.email === email);
    if (existing) return res.status(400).json({ message: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = { id: Date.now(), name, email, password: hashed };
    users.push(newUser);
    res.json({ message: "Registered successfully" });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: "Login successful", token, name: user.name });
});

module.exports = router;
