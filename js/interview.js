import DSA_QUESTIONS from './data.js';
import HR_QUESTIONS from './hr-questions.js';
import {
  saveMockSession,
  getMockSessions,
  saveEnglishStreak,
  getEnglishStreak,
  incrementStreak
} from './progress.js';

// ========== STATE ==========
let interviewState = {
  type: 'dsa', // 'dsa', 'hr', 'flashcard'
  company: null,
  difficulty: null,
  questionCount: 3,
  timePerQuestion: 5, // minutes
  sessionActive: false,
  currentQuestionIndex: 0,
  questions: [],
  answers: {},
  ratings: {},
  sessionStartTime: null,
  currentQuestionStartTime: null,
  sessionScore: 0,
  topic: null,
  flashcardIndex: 0,
  flashcardRatings: {}
};

// ========== INITIALIZATION ==========
export function initMockInterview() {
  if (!document.querySelector('.mock-interview-section')) return;

  setupTabSwitching();
  setupDSASetup();
  setupHRSetup();
  setupFlashcardSetup();
  loadSessionHistory();
}

// ========== TAB SWITCHING ==========
function setupTabSwitching() {
  document.querySelectorAll('.mock-tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const tabName = this.dataset.tab;
      switchTab(tabName);
    });
  });
}

function switchTab(tabName) {
  // Update buttons
  document.querySelectorAll('.mock-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

  // Update panels
  document.querySelectorAll('.mock-tab-panel').forEach(panel => panel.classList.remove('active'));
  document.getElementById(`${tabName}-panel`).classList.add('active');

  interviewState.type = tabName;

  if (tabName === 'hr-practice') {
    renderHRQuestions();
  } else if (tabName === 'flashcard') {
    loadFlashcardDeck('Arrays');
  }
}

// ========== DSA SESSION SETUP ==========
function setupDSASetup() {
  // Company selection
  document.querySelectorAll('.company-card').forEach(card => {
    card.addEventListener('click', function() {
      document.querySelectorAll('.company-card').forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
      interviewState.company = this.dataset.company;
    });
  });

  // Difficulty selection
  document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      interviewState.difficulty = this.dataset.difficulty;
    });
  });

  // Question count slider
  const slider = document.querySelector('.slider');
  if (slider) {
    slider.addEventListener('input', function() {
      interviewState.questionCount = parseInt(this.value);
      document.querySelector('.slider-display').textContent = `${this.value} Questions`;
    });
  }

  // Time per question
  document.querySelectorAll('.timer-pill').forEach(pill => {
    pill.addEventListener('click', function() {
      document.querySelectorAll('.timer-pill').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      interviewState.timePerQuestion = parseInt(this.dataset.time);
    });
  });

  // Start session button
  const startBtn = document.querySelector('.btn-start-session');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      if (!interviewState.company || !interviewState.difficulty) {
        showToast('Please select a company and difficulty level', 'warning');
        return;
      }
      startDSASession();
    });
  }
}

export function startDSASession(company, difficulty, count, timePerQ) {
  // Allow parameters or use selected values
  const selectedCompany = company || interviewState.company;
  const selectedDifficulty = difficulty || interviewState.difficulty;
  const questionCount = count || interviewState.questionCount;
  const timePerQuestion = timePerQ || interviewState.timePerQuestion;

  // Get filtered questions
  let filtered = DSA_QUESTIONS.filter(q =>
    q.companies.includes(selectedCompany) &&
    (selectedDifficulty === 'All' || q.difficulty === selectedDifficulty)
  );

  if (filtered.length === 0) {
    showToast('No questions found for selected criteria', 'error');
    return;
  }

  // Shuffle and select
  filtered = shuffleArray(filtered).slice(0, questionCount);

  // Initialize session
  interviewState.company = selectedCompany;
  interviewState.difficulty = selectedDifficulty;
  interviewState.questions = filtered;
  interviewState.answers = {};
  interviewState.ratings = {};
  interviewState.sessionActive = true;
  interviewState.currentQuestionIndex = 0;
  interviewState.sessionStartTime = Date.now();
  interviewState.sessionScore = 0;
  interviewState.timePerQuestion = timePerQuestion;

  // Show interview screen
  document.getElementById('dsa-setup-screen').style.display = 'none';
  document.getElementById('dsa-interview-active').style.display = 'block';

  showDSAQuestion();
}

function showDSAQuestion() {
  if (interviewState.currentQuestionIndex >= interviewState.questions.length) {
    endDSASession();
    return;
  }

  const question = interviewState.questions[interviewState.currentQuestionIndex];
  interviewState.currentQuestionStartTime = Date.now();

  // Update header
  document.querySelector('.interview-top-bar .question-counter').textContent =
    `Question ${interviewState.currentQuestionIndex + 1} of ${interviewState.questions.length}`;
  document.querySelector('.interview-top-bar .company-badge').textContent = interviewState.company;

  // Update question content
  document.querySelector('.question-text').textContent = question.question;
  document.querySelector('.hint-box').textContent = `💡 ${question.insight}`;

  // Reset textarea
  const textarea = document.querySelector('.answer-textarea');
  textarea.value = interviewState.answers[question.id] || '';
  textarea.addEventListener('input', (e) => {
    interviewState.answers[question.id] = e.target.value;
    document.querySelector('.char-counter').textContent = `${e.target.value.length} characters`;
  });

  // Start timer
  startQuestionTimer();

  // Reset rating
  document.querySelectorAll('.emoji-btn').forEach(btn => btn.classList.remove('selected'));
}

function startQuestionTimer() {
  const timerDisplay = document.querySelector('.timer-text');
  const timerProgress = document.querySelector('.timer-progress');
  const timeLimit = interviewState.timePerQuestion * 60; // Convert to seconds

  let timeRemaining = timeLimit;

  const updateTimer = () => {
    const elapsed = Math.floor((Date.now() - interviewState.currentQuestionStartTime) / 1000);
    timeRemaining = Math.max(0, timeLimit - elapsed);

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Update progress
    const percent = (timeRemaining / timeLimit) * 100;
    timerProgress.style.strokeDashoffset = 282.7 - (percent / 100) * 282.7;

    // Color coding
    timerProgress.classList.remove('warning', 'critical');
    if (percent <= 25) {
      timerProgress.classList.add('critical');
    } else if (percent <= 50) {
      timerProgress.classList.add('warning');
    }

    if (timeRemaining > 0) {
      setTimeout(updateTimer, 1000);
    } else {
      goToNextQuestion();
    }
  };

  updateTimer();
}

export function recordSelfAssessment(rating) {
  const question = interviewState.questions[interviewState.currentQuestionIndex];
  interviewState.ratings[question.id] = rating;
  document.querySelectorAll('.emoji-btn').forEach(btn => btn.classList.remove('selected'));
  event.target.classList.add('selected');
}

export function goToNextQuestion() {
  interviewState.currentQuestionIndex++;
  if (interviewState.currentQuestionIndex >= interviewState.questions.length) {
    endDSASession();
  } else {
    showDSAQuestion();
  }
}

export function skipQuestion() {
  goToNextQuestion();
}

function endDSASession() {
  document.getElementById('dsa-interview-active').style.display = 'none';
  document.getElementById('dsa-results-screen').style.display = 'block';

  // Calculate final score
  const RatingCounts = {};
  Object.values(mockInterviewState.sessionAnswers).forEach(val => {
    if (typeof val === 'string' && val.includes('_rating')) {
      RatingCounts[val]++;
    }
  });

  const totalRated = (RatingCounts['Perfect'] || 0) + (RatingCounts['Got It'] || 0);
  const avgScore = totalRated > 0 
    ? Math.round((((RatingCounts['Perfect'] || 0) * 100 + (RatingCounts['Got It'] || 0) * 60) / (totalRated * 100)) * 100)
    : 0;

  // Save session data to sessionStorage for PDF export
  const sessionData = {
    date: new Date().toLocaleDateString(),
    score: avgScore,
    company: mockInterviewState.selectedCompany,
    difficulty: mockInterviewState.selectedDifficulty,
    questionsAttempted: mockInterviewState.sessionQuestions.length,
    hintsUsed: 0,
    timeTaken: Date.now() - mockInterviewState.sessionStartTime,
    questions: mockInterviewState.sessionQuestions.map((q, idx) => ({
      title: q.question,
      topic: q.topic,
      difficulty: q.difficulty,
      company: q.companies ? q.companies[0] : '',
      rating: mockInterviewState.sessionAnswers[q.id + '_rating'] || 'N/A'
    }))
  };

  sessionStorage.setItem('preppath_current_session', JSON.stringify(sessionData));

  // Show stats
  const ratingCounts = {
    blank: Object.values(interviewState.ratings).filter(r => r === 'Blank').length,
    vague: Object.values(interviewState.ratings).filter(r => r === 'Vague').length,
    partial: Object.values(interviewState.ratings).filter(r => r === 'Partial').length,
    gotIt: Object.values(interviewState.ratings).filter(r => r === 'Got It').length,
    perfect: Object.values(interviewState.ratings).filter(r => r === 'Perfect').length
  };

  const statBoxes = document.querySelectorAll('.stat-box');
  statBoxes[0].innerHTML = `<div class="stat-value">${ratingCounts.perfect}</div><div class="stat-name">Perfect</div>`;
  statBoxes[1].innerHTML = `<div class="stat-value">${ratingCounts.gotIt}</div><div class="stat-name">Got It</div>`;
  statBoxes[2].innerHTML = `<div class="stat-value">${ratingCounts.partial}</div><div class="stat-name">Partial</div>`;
  statBoxes[3].innerHTML = `<div class="stat-value">${ratingCounts.vague}</div><div class="stat-name">Vague</div>`;

  // Add download button to action buttons
  const actionButtonsContainer = document.querySelector('.action-buttons');
  if (actionButtonsContainer && !document.getElementById('download-scorecard-btn')) {
    const downloadBtn = document.createElement('button');
    downloadBtn.id = 'download-scorecard-btn';
    downloadBtn.className = 'btn-primary';
    downloadBtn.textContent = '📄 Download Scorecard PDF';
    downloadBtn.style.cssText = `
      background: linear-gradient(135deg, #6C63FF, #FF6584);
      padding: 0.9rem 1.8rem;
      margin: 0 0.5rem;
      border: none;
      color: white;
      border-radius: 10px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
    `;
    downloadBtn.addEventListener('mouseover', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 6px 20px rgba(108, 99, 255, 0.3)';
    });
    downloadBtn.addEventListener('mouseout', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
    downloadBtn.addEventListener('click', downloadScorecard);
    actionButtonsContainer.insertBefore(downloadBtn, actionButtonsContainer.firstChild);
  }

  showToast(`Interview Complete! Score: ${avgScore}%`, 'success');
}

// ========== HR PRACTICE SETUP ==========
function setupHRSetup() {
  document.querySelectorAll('.hr-filter-pill').forEach(pill => {
    pill.addEventListener('click', function() {
      this.classList.toggle('active');
      renderHRQuestions();
    });
  });
}

export function startHRRound(topic) {
  const filtered = HR_QUESTIONS.filter(q => !topic || q.topic === topic);
  interviewState.questions = filtered;
  interviewState.currentQuestionIndex = 0;
  interviewState.answers = {};
  interviewState.ratings = {};
  interviewState.sessionActive = true;
  interviewState.topic = topic;

  showHRQuestion();
}

function showHRQuestion() {
  if (interviewState.currentQuestionIndex >= interviewState.questions.length) {
    endHRRound();
    return;
  }

  const question = interviewState.questions[interviewState.currentQuestionIndex];

  // Show modal or panel with HR question
  const modal = document.createElement('div');
  modal.className = 'hr-modal';
  modal.innerHTML = `
    <div class="hr-modal-content">
      <div class="hr-modal-header">
        <h3>${question.question}</h3>
        <span class="hr-modal-close">&times;</span>
      </div>
      <div class="hr-modal-body">
        <div class="hr-tips">
          <div class="hr-tips-title">💡 Tip:</div>
          <div class="hr-tips-text">${question.tipAnswer}</div>
        </div>
        <textarea class="hr-textarea" placeholder="Type your answer here..."></textarea>
        <div class="hr-word-count">0 words</div>
      </div>
      <div class="hr-modal-footer">
        <button class="btn-previous">← Previous</button>
        <button class="btn-next-hr">Next →</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Textarea tracking
  const textarea = modal.querySelector('.hr-textarea');
  textarea.value = interviewState.answers[question.id] || '';
  textarea.addEventListener('input', (e) => {
    interviewState.answers[question.id] = e.target.value;
    const wordCount = e.target.value.trim().split(/\s+/).length;
    modal.querySelector('.hr-word-count').textContent = `${wordCount} words`;
  });

  // Button handlers
  modal.querySelector('.hr-modal-close').addEventListener('click', () => modal.remove());
  modal.querySelector('.btn-previous').addEventListener('click', () => {
    modal.remove();
    interviewState.currentQuestionIndex = Math.max(0, interviewState.currentQuestionIndex - 1);
    showHRQuestion();
  });
  modal.querySelector('.btn-next-hr').addEventListener('click', () => {
    modal.remove();
    interviewState.currentQuestionIndex++;
    if (interviewState.currentQuestionIndex >= interviewState.questions.length) {
      endHRRound();
    } else {
      showHRQuestion();
    }
  });
}

function renderHRQuestions() {
  const activeFilters = Array.from(document.querySelectorAll('.hr-filter-pill.active')).map(p => p.dataset.category);
  const filtered = activeFilters.length === 0 ? HR_QUESTIONS : HR_QUESTIONS.filter(q => activeFilters.includes(q.topic));

  const container = document.getElementById('hr-cards-grid');
  if (!container) return;

  container.innerHTML = filtered.map(question => `
    <div class="hr-card">
      <div class="hr-card-header">
        <span class="hr-category-badge">${question.topic}</span>
        <span class="hr-time-limit">2 min</span>
      </div>
      <div class="hr-question">${question.question}</div>
      <div class="hr-preview">Preparing answer...</div>
    </div>
  `).join('');

  container.querySelectorAll('.hr-card').forEach((card, idx) => {
    card.addEventListener('click', () => {
      startHRRound(filtered[idx].topic);
    });
  });
}

function endHRRound() {
  showToast('HR Round Complete!', 'success');
  incrementStreak();
}

// ========== FLASHCARD SETUP ==========
function setupFlashcardSetup() {
  const topicDropdown = document.querySelector('.topic-dropdown');
  if (topicDropdown) {
    topicDropdown.addEventListener('change', (e) => {
      loadFlashcardDeck(e.target.value);
    });
  }

  const flashcard = document.getElementById('flashcard');
  if (flashcard) {
    flashcard.addEventListener('click', function() {
      this.classList.toggle('flipped');
    });
  }

  // Navigation buttons
  document.querySelector('.btn-prev-flashcard')?.addEventListener('click', showPreviousFlashcard);
  document.querySelector('.btn-next-flashcard')?.addEventListener('click', showNextFlashcard);
}

export function startFlashcardMode(topic) {
  loadFlashcardDeck(topic);
}

export function loadFlashcardDeck(topic) {
  const filtered = DSA_QUESTIONS.filter(q => q.topic === topic);
  interviewState.questions = filtered;
  interviewState.flashcardIndex = 0;
  interviewState.topic = topic;

  if (filtered.length === 0) {
    showToast('No questions found for this topic', 'warning');
    return;
  }

  showFlashcard();
}

function showFlashcard() {
  const card = interviewState.questions[interviewState.flashcardIndex];
  if (!card) return;

  const flashcard = document.getElementById('flashcard');
  if (!flashcard) return;

  flashcard.classList.remove('flipped');

  // Update progress
  document.querySelector('.flashcard-center').textContent = `${interviewState.flashcardIndex + 1} / ${interviewState.questions.length}`;

  const progressPercent = ((interviewState.flashcardIndex + 1) / interviewState.questions.length) * 100;
  document.querySelector('.flashcard-progress-fill').style.width = `${progressPercent}%`;

  // Front side
  document.querySelector('.flash-question').textContent = card.question;
  document.querySelector('.flash-hint-text').textContent = `💡 ${card.insight}`;

  // Back side
  document.querySelector('.flash-complexity').innerHTML = `
    <div class="flash-time">⏱️ Time: ${card.time}</div>
    <div class="flash-space">💾 Space: ${card.space}</div>
  `;

  const leetcodeLink = document.querySelector('.flash-leetcode');
  if (leetcodeLink) {
    leetcodeLink.href = card.leetcode;
  }

  // Rating buttons
  document.querySelectorAll('.flash-rate-btn').forEach(btn => {
    btn.classList.remove('selected');
    const rating = btn.dataset.rating;
    if (interviewState.flashcardRatings[card.id] === rating) {
      btn.classList.add('selected');
    }
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      interviewState.flashcardRatings[card.id] = rating;
      document.querySelectorAll('.flash-rate-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      localStorage.setItem('preptrack_flashcard_ratings', JSON.stringify(interviewState.flashcardRatings));
    });
  });
}

function showNextFlashcard() {
  interviewState.flashcardIndex++;
  if (interviewState.flashcardIndex >= interviewState.questions.length) {
    showFlashcardComplete();
  } else {
    showFlashcard();
  }
}

function showPreviousFlashcard() {
  interviewState.flashcardIndex = Math.max(0, interviewState.flashcardIndex - 1);
  showFlashcard();
}

function showFlashcardComplete() {
  document.getElementById('flashcard').style.display = 'none';
  const completeScreen = document.getElementById('flashcard-complete-screen');
  if (completeScreen) {
    completeScreen.style.display = 'block';

    const ratedCount = Object.keys(interviewState.flashcardRatings).length;
    const perfectCount = Object.values(interviewState.flashcardRatings).filter(r => r === 'Perfect').length;

    document.querySelector('.fc-stat-value:nth-of-type(1)').textContent = interviewState.questions.length;
    document.querySelector('.fc-stat-value:nth-of-type(2)').textContent = ratedCount;
    document.querySelector('.fc-stat-value:nth-of-type(3)').textContent = perfectCount;
  }
}

// ========== UTILITY FUNCTIONS ==========
export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}m ${secs}s`;
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: ${type === 'success' ? '#43e97b' : type === 'error' ? '#ff6584' : type === 'warning' ? '#ffa500' : '#6C63FF'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    z-index: 9999;
    animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s forwards;
    font-weight: 600;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function loadSessionHistory() {
  const sessions = getMockSessions();
  const recentContainer = document.querySelector('.recent-sessions');
  if (recentContainer && sessions.length > 0) {
    recentContainer.innerHTML = `
      <h3>Recent Sessions</h3>
      <div class="sessions-row">
        ${sessions.slice(0, 5).map(session => `
          <div class="session-card">
            <div class="session-date">${new Date(session.date).toLocaleDateString()}</div>
            <div class="session-company">${session.company}</div>
            <div class="session-score">${session.score}%</div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

function downloadScorecard() {
  const session = {
    date: new Date().toLocaleDateString(),
    score: interviewState.sessionScore,
    company: interviewState.company,
    difficulty: interviewState.difficulty,
    questionsAttempted: interviewState.questions.length,
    hintsUsed: 0,
    timeTaken: (Date.now() - interviewState.sessionStartTime) / 1000,
    questions: interviewState.questions.map(q => ({
      title: q.question,
      topic: q.topic,
      difficulty: q.difficulty,
      company: q.companies ? q.companies[0] : '',
      rating: interviewState.ratings[q.id] || 'N/A'
    }))
  };

  const pdfContent = `
    <h1>Interview Scorecard</h1>
    <p><strong>Date:</strong> ${session.date}</p>
    <p><strong>Company:</strong> ${session.company}</p>
    <p><strong>Difficulty:</strong> ${session.difficulty}</p>
    <p><strong>Score:</strong> ${session.score}%</p>
    <p><strong>Questions Attempted:</strong> ${session.questionsAttempted}</p>
    <p><strong>Time Taken:</strong> ${formatTime(session.timeTaken)}</p>
    <h2>Question Breakdown</h2>
    <table>
      <tr>
        <th>Question</th>
        <th>Topic</th>
        <th>Difficulty</th>
        <th>Company</th>
        <th>Rating</th>
      </tr>
      ${session.questions.map(q => `
        <tr>
          <td>${q.title}</td>
          <td>${q.topic}</td>
          <td>${q.difficulty}</td>
          <td>${q.companies ? q.companies[0] : ''}</td>
          <td>${q.rating}</td>
        </tr>
      `).join('')}
    </table>
  `;

  const blob = new Blob([pdfContent], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `scorecard_${session.date}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('Scorecard downloaded!', 'success');
}
