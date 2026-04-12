const express = require('express');
const { run, get, all } = require('../db');

const router = express.Router();

// GET all progress for a user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const progress = await all(
      'SELECT * FROM progress WHERE userId = ? ORDER BY updated_at DESC',
      [userId]
    );

    const track = await get(
      'SELECT track FROM user_tracks WHERE userId = ?',
      [userId]
    );

    const solved = progress.filter(p => p.solved).map(p => p.questionId);
    const bookmarks = progress.filter(p => p.bookmarked).map(p => p.questionId);

    res.json({
      success: true,
      data: {
        userId,
        solvedQuestions: solved,
        bookmarks: bookmarks,
        selectedTrack: track?.track || null,
        progressCount: progress.length
      }
    });
  } catch (err) {
    console.error('Error fetching progress:', err);
    res.status(500).json({ error: 'Failed to fetch progress' });
  }
});

// POST mark question as solved
router.post('/:userId/solve', async (req, res) => {
  try {
    const { userId } = req.params;
    const { questionId } = req.body;

    if (!questionId) {
      return res.status(400).json({ error: 'questionId is required' });
    }

    await run(
      `INSERT OR REPLACE INTO progress (userId, questionId, solved, updated_at)
       VALUES (?, ?, 1, CURRENT_TIMESTAMP)`,
      [userId, questionId]
    );

    res.json({
      success: true,
      message: 'Question marked as solved',
      data: { userId, questionId, solved: true }
    });
  } catch (err) {
    console.error('Error marking question as solved:', err);
    res.status(500).json({ error: 'Failed to mark question as solved' });
  }
});

// DELETE unmark question as solved
router.delete('/:userId/solve/:questionId', async (req, res) => {
  try {
    const { userId, questionId } = req.params;

    await run(
      `UPDATE progress SET solved = 0, updated_at = CURRENT_TIMESTAMP
       WHERE userId = ? AND questionId = ?`,
      [userId, questionId]
    );

    res.json({
      success: true,
      message: 'Question unmarked as solved',
      data: { userId, questionId, solved: false }
    });
  } catch (err) {
    console.error('Error unmarking question:', err);
    res.status(500).json({ error: 'Failed to unmark question' });
  }
});

// POST bookmark question
router.post('/:userId/bookmark', async (req, res) => {
  try {
    const { userId } = req.params;
    const { questionId } = req.body;

    if (!questionId) {
      return res.status(400).json({ error: 'questionId is required' });
    }

    const existing = await get(
      'SELECT bookmarked FROM progress WHERE userId = ? AND questionId = ?',
      [userId, questionId]
    );

    const isBookmarked = existing ? !existing.bookmarked : true;

    await run(
      `INSERT OR REPLACE INTO progress (userId, questionId, bookmarked, updated_at)
       VALUES (?, ?, ?, CURRENT_TIMESTAMP)`,
      [userId, questionId, isBookmarked ? 1 : 0]
    );

    res.json({
      success: true,
      message: isBookmarked ? 'Question bookmarked' : 'Bookmark removed',
      data: { userId, questionId, bookmarked: isBookmarked }
    });
  } catch (err) {
    console.error('Error toggling bookmark:', err);
    res.status(500).json({ error: 'Failed to toggle bookmark' });
  }
});

// POST set selected track
router.post('/:userId/track', async (req, res) => {
  try {
    const { userId } = req.params;
    const { track } = req.body;

    if (!track) {
      return res.status(400).json({ error: 'track is required' });
    }

    await run(
      `INSERT OR REPLACE INTO user_tracks (userId, track, updated_at)
       VALUES (?, ?, CURRENT_TIMESTAMP)`,
      [userId, track]
    );

    res.json({
      success: true,
      message: 'Track updated',
      data: { userId, track }
    });
  } catch (err) {
    console.error('Error updating track:', err);
    res.status(500).json({ error: 'Failed to update track' });
  }
});

// GET selected track for user
router.get('/:userId/track', async (req, res) => {
  try {
    const { userId } = req.params;

    const track = await get(
      'SELECT track FROM user_tracks WHERE userId = ?',
      [userId]
    );

    res.json({
      success: true,
      data: { userId, track: track?.track || null }
    });
  } catch (err) {
    console.error('Error fetching track:', err);
    res.status(500).json({ error: 'Failed to fetch track' });
  }
});

module.exports = router;
