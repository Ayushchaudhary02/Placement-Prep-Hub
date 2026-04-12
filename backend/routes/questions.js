const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Load questions from JSON file
let questionsData = [];

function loadQuestions() {
  try {
    const filePath = path.join(__dirname, '../data/questions.json');
    const data = fs.readFileSync(filePath, 'utf8');
    questionsData = JSON.parse(data);
    console.log(`✓ Loaded ${questionsData.length} questions from JSON`);
  } catch (err) {
    console.error('Error loading questions:', err);
    questionsData = [];
  }
}

// Load questions on startup
loadQuestions();

// GET all questions with optional filters
router.get('/', (req, res) => {
  try {
    const { topic, difficulty, company, search } = req.query;
    
    let filtered = questionsData;

    // Filter by topic
    if (topic && topic !== 'All') {
      filtered = filtered.filter(q => q.topic === topic);
    }

    // Filter by difficulty
    if (difficulty) {
      const difficulties = difficulty.split(',').map(d => d.trim());
      filtered = filtered.filter(q => difficulties.includes(q.difficulty));
    }

    // Filter by company
    if (company) {
      const companies = company.split(',').map(c => c.trim());
      filtered = filtered.filter(q => 
        q.companies.some(comp => companies.includes(comp))
      );
    }

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(q =>
        q.question.toLowerCase().includes(searchLower) ||
        q.number.toLowerCase().includes(searchLower) ||
        q.title?.toLowerCase().includes(searchLower)
      );
    }

    res.json({
      success: true,
      count: filtered.length,
      data: filtered
    });
  } catch (err) {
    console.error('Error fetching questions:', err);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

// GET single question by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const question = questionsData.find(q => q.id === id);

    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    res.json({
      success: true,
      data: question
    });
  } catch (err) {
    console.error('Error fetching question:', err);
    res.status(500).json({ error: 'Failed to fetch question' });
  }
});

// GET questions by topic
router.get('/topic/:topic', (req, res) => {
  try {
    const { topic } = req.params;
    const questions = questionsData.filter(q => q.topic === topic);

    res.json({
      success: true,
      topic,
      count: questions.length,
      data: questions
    });
  } catch (err) {
    console.error('Error fetching questions by topic:', err);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

// GET topics list
router.get('/stats/topics', (req, res) => {
  try {
    const topics = {};
    
    questionsData.forEach(q => {
      if (!topics[q.topic]) {
        topics[q.topic] = { easy: 0, medium: 0, hard: 0, total: 0 };
      }
      topics[q.topic][q.difficulty.toLowerCase()] = (topics[q.topic][q.difficulty.toLowerCase()] || 0) + 1;
      topics[q.topic].total++;
    });

    res.json({
      success: true,
      data: topics
    });
  } catch (err) {
    console.error('Error fetching topic stats:', err);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

module.exports = router;
