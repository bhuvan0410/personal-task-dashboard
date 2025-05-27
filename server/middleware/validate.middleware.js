// middleware/validate.middleware.js

exports.validateTask = (req, res, next) => {
  const { title, description } = req.body;

  if (!title || typeof title !== 'string' || title.trim().length === 0) {
    return res.status(400).json({ message: 'Task title is required' });
  }

  if (description && typeof description !== 'string') {
    return res.status(400).json({ message: 'Description must be a string' });
  }

  next();
};

exports.validateSignup = (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || typeof username !== 'string') {
    return res.status(400).json({ message: 'Username is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: 'Valid email is required' });
  }

  if (!password || password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }

  next();
};
