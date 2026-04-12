const { v4: uuidv4, validate: uuidValidate } = require('uuid');
const { get, run } = require('../db');

const authMiddleware = async (req, res, next) => {
  try {
    let userId = req.headers['x-user-id'];

    // If no user ID provided, generate one
    if (!userId) {
      userId = uuidv4();
      res.setHeader('x-user-id', userId);
    } else if (!uuidValidate(userId)) {
      // Invalid UUID format
      return res.status(400).json({ error: 'Invalid user ID format' });
    }

    // Check if user exists, if not create them
    const userExists = await get('SELECT id FROM users WHERE id = ?', [userId]);
    
    if (!userExists) {
      await run('INSERT INTO users (id, name) VALUES (?, ?)', [userId, `User-${userId.substring(0, 8)}`]);
    }

    // Attach userId to request
    req.userId = userId;
    
    // Set user ID in response headers
    res.setHeader('x-user-id', userId);

    next();
  } catch (err) {
    console.error('Auth middleware error:', err);
    res.status(500).json({ error: 'Authentication error' });
  }
};

module.exports = authMiddleware;
