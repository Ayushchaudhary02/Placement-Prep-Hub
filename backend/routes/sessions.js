const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { run, all, get } = require('../db');

const router = express.Router();

// GET past mock sessions for a user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { limit = 10 } = req.query;

    const sessions = await all(
      `SELECT * FROM sessions WHERE userId = ? ORDER BY created_at DESC LIMIT ?`,
      [userId, parseInt(limit)]
    );

    res.json({
      success: true,
      userId,
      count: sessions.length,
      data: sessions
    });
  } catch (err) {
    console.error('Error fetching sessions:', err);
    res.status(500).json({ error: 'Failed to fetch sessions' });
  }
});

// GET single session
router.get('/:userId/:sessionId', async (req, res) => {
  try {
    const { userId, sessionId } = req.params;

    const session = await get(
      'SELECT * FROM sessions WHERE id = ? AND userId = ?',
      [sessionId, userId]
    );

    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    res.json({
      success: true,
      data: session
    });
  } catch (err) {
    console.error('Error fetching session:', err);
    res.status(500).json({ error: 'Failed to fetch session' });
  }
});

// POST save new mock session
router.post('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { company, difficulty, score, questionsAttempted, hintsUsed, timeTaken } = req.body;

    if (!company || score === undefined || !questionsAttempted) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const sessionId = uuidv4();

    await run(
      `INSERT INTO sessions (id, userId, company, difficulty, score, questionsAttempted, hintsUsed, timeTaken)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [sessionId, userId, company, difficulty || null, score, questionsAttempted, hintsUsed || 0, timeTaken || 0]
    );

    res.json({
      success: true,
      message: 'Session saved',
      data: { sessionId, userId, company, score }
    });
  } catch (err) {
    console.error('Error saving session:', err);
    res.status(500).json({ error: 'Failed to save session' });
  }
});

// GET leaderboard (top 10 scores)
router.get('/leaderboard/global', async (req, res) => {
  try {
    const { limit = 10 } = req.query;

    const leaderboard = await all(
      `SELECT 
        u.id, u.name,
        s.score,
        s.company,
        COUNT(s.id) as sessionCount,
        MAX(s.score) as bestScore,
        AVG(s.score) as avgScore,
        s.created_at
      FROM sessions s
      JOIN users u ON s.userId = u.id
      GROUP BY s.userId
      ORDER BY MAX(s.score) DESC, AVG(s.score) DESC
      LIMIT ?`,
      [parseInt(limit)]
    );

    res.json({
      success: true,
      count: leaderboard.length,
      data: leaderboard
    });
  } catch (err) {
    console.error('Error fetching leaderboard:', err);
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

// GET user's stats
router.get('/:userId/stats', async (req, res) => {
  try {
    const { userId } = req.params;

    const sessions = await all(
      'SELECT score, questionsAttempted FROM sessions WHERE userId = ? ORDER BY created_at DESC',
      [userId]
    );

    if (sessions.length === 0) {
      return res.json({
        success: true,
        data: {
          totalSessions: 0,
          bestScore: 0,
          avgScore: 0,
          totalQuestionsAttempted: 0
        }
      });
    }

    const scores = sessions.map(s => s.score);
    const bestScore = Math.max(...scores);
    const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    const totalQuestionsAttempted = sessions.reduce((sum, s) => sum + s.questionsAttempted, 0);

    res.json({
      success: true,
      data: {
        totalSessions: sessions.length,
        bestScore,
        avgScore,
        totalQuestionsAttempted,
        recentSessions: sessions.slice(0, 5)
      }
    });
  } catch (err) {
    console.error('Error fetching stats:', err);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

module.exports = router;
