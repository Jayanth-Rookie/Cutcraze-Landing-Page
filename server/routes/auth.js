import express from 'express';

const router = express.Router();

// Dummy user data for testing (Replace this with a database in production)
const users = [
  { id: 1, username: 'admin', password: 'password123' },
];

// Login Route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);
  
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful', user });
});

// Register Route (For testing only, should be connected to a database)
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

export default router;
