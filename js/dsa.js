import DSA_QUESTIONS from './data.js';
import {
  saveProgress,
  removeProgress,
  getSolvedQuestions,
  isQuestionSolved,
  toggleBookmark,
  getBookmarks,
  isBookmarked
} from './progress.js';

// ========== STATE ==========
let dsaState = {
  allQuestions: DSA_QUESTIONS,
  filteredQuestions: DSA_QUESTIONS,
  filters: {
    topic: 'All',
    difficulty: [],
    companies: [],
    bookmarkedOnly: false,
    search: ''
  },
  topicCounts: {}
};

// ========== INITIALIZATION ==========
export function initDSASection() {
  if (!document.querySelector('.dsa-section')) return;

  calculateTopicCounts();
  renderQuestions(dsaState.allQuestions);
  setupFilters();
  updateTotalCounter();
}

// ========== RENDER QUESTIONS ==========
export function renderQuestions(questions) {
  const container = document.querySelector('.dsa-questions-container');
  if (!container) return;

  if (questions.length === 0) {
    container.innerHTML = `
      <div class="dsa-empty-state">
        <div class="dsa-empty-state-icon">🔍</div>
        <p class="dsa-empty-state-text">No questions match your filters</p>
      </div>
    `;
    return;
  }

  const grouped = {};
  questions.forEach(q => {
    if (!grouped[q.topic]) grouped[q.topic] = [];
    grouped[q.topic].push(q);
  });

  container.innerHTML = '';

  const topicOrder = ['Arrays', 'Strings', 'Linked Lists', 'Stacks & Queues', 'Trees', 'Graphs', 'Dynamic Programming', 'Greedy', 'Backtracking', 'Segment Trees'];

  topicOrder.forEach(topic => {
    if (!grouped[topic] || grouped[topic].length === 0) return;

    const topicQuestions = grouped[topic];
    const solvedCount = topicQuestions.filter(q => isQuestionSolved(q.id)).length;

    const accordion = document.createElement('div');
    accordion.className = 'accordion-item';
    accordion.innerHTML = `
      <div class="accordion-header">
        <div class="accordion-left">
          <div class="accordion-topic-emoji">${getTopicEmoji(topic)}</div>
          <div class="accordion-topic-info">
            <div class="accordion-topic-name">${topic}</div>
            <div class="accordion-progress-bar">
              <div class="accordion-progress-fill" style="width: ${(solvedCount / topicQuestions.length) * 100}%"></div>
            </div>
          </div>
        </div>
        <div class="accordion-right">
          <div class="accordion-count">
            <span class="topic-solved-${topic.replace(/ /g, '-')}">${solvedCount}</span>/<span>${topicQuestions.length}</span>
          </div>
          <div class="accordion-arrow">▼</div>
        </div>
      </div>
      <div class="accordion-body">
        <div class="accordion-content">
          ${topicQuestions.map(q => renderQuestionCard(q)).join('')}
        </div>
      </div>
    `;

    container.appendChild(accordion);

    // Add accordion toggle event
    accordion.querySelector('.accordion-header').addEventListener('click', function() {
      this.classList.toggle('open');
      this.nextElementSibling.classList.toggle('open');
    });
  });

  attachQuestionEventListeners();
}

function renderQuestionCard(question) {
  const isSolved = isQuestionSolved(question.id);
  const isBookmarkedQ = isBookmarked(question.id);

  const difficultyColor = {
    'Easy': '#064e3b',
    'Medium': '#78350f',
    'Hard': '#7f1d1d'
  };

  const difficultyTextColor = {
    'Easy': '#34d399',
    'Medium': '#fbbf24',
    'Hard': '#f87171'
  };

  return `
    <div class="question-card" data-question-id="${question.id}">
      <div class="question-header">
        <div class="question-badges">
          <span class="question-number">${question.number}</span>
          <span class="difficulty-badge" style="background: ${difficultyColor[question.difficulty]}; color: ${difficultyTextColor[question.difficulty]}; border: 1px solid ${difficultyTextColor[question.difficulty]};">
            ${question.difficulty}
          </span>
          <div class="company-pills">
            ${question.companies.map(company => `
              <span class="company-pill company-${company.toLowerCase()}">${company}</span>
            `).join('')}
          </div>
        </div>
        <div class="question-actions">
          <button class="bookmark-btn ${isBookmarkedQ ? 'bookmarked' : ''}" data-question-id="${question.id}" title="Bookmark question">
            ${isBookmarkedQ ? '⭐' : '☆'}
          </button>
          <button class="solved-checkbox ${isSolved ? 'solved' : ''}" data-question-id="${question.id}" title="Mark as solved">
            ${isSolved ? '✓' : ''}
          </button>
        </div>
      </div>

      <div class="question-text">${question.question}</div>

      <div class="answer-section">
        <button class="answer-toggle-btn" data-question-id="${question.id}">View Solution</button>
        <div class="answer-box" style="display: none;">
          <div class="answer-insight">
            <div class="insight-label">💡 Key Insight</div>
            <div class="insight-text">${question.insight}</div>
          </div>

          <div class="complexity-row">
            <div class="complexity-item">
              <span class="complexity-label">Time Complexity:</span>
              <span class="complexity-badge time-badge">${question.time}</span>
            </div>
            <div class="complexity-item">
              <span class="complexity-label">Space Complexity:</span>
              <span class="complexity-badge space-badge">${question.space}</span>
            </div>
          </div>

          <div class="answer-buttons">
            <a href="${question.leetcode}" target="_blank" class="leetcode-btn">
              🔗 Solve on LeetCode
            </a>
            <button class="mark-solved-btn ${isSolved ? 'solved' : ''}" data-question-id="${question.id}">
              ${isSolved ? '✓ Solved' : 'Mark Solved'}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function attachQuestionEventListeners() {
  // Solved checkbox toggles
  document.querySelectorAll('.solved-checkbox').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const questionId = this.dataset.questionId;
      markSolved(questionId);
    });
  });

  // Bookmark button toggles
  document.querySelectorAll('.bookmark-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const questionId = this.dataset.questionId;
      toggleBookmark(questionId);
      this.classList.toggle('bookmarked');
      this.textContent = this.classList.contains('bookmarked') ? '⭐' : '☆';
    });
  });

  // Answer toggle buttons
  document.querySelectorAll('.answer-toggle-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const card = this.closest('.question-card');
      const answerBox = card.querySelector('.answer-box');
      const isExpanded = answerBox.style.display === 'block';
      answerBox.style.display = isExpanded ? 'none' : 'block';
      this.textContent = isExpanded ? 'View Solution' : 'Hide Solution';
      this.classList.toggle('expanded');
    });
  });

  // Mark solved from answer box
  document.querySelectorAll('.mark-solved-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const questionId = this.dataset.questionId;
      markSolved(questionId);
    });
  });
}

// ========== FILTER QUESTIONS ==========
export function filterQuestions() {
  let filtered = dsaState.allQuestions;

  // Topic filter
  if (dsaState.filters.topic !== 'All') {
    filtered = filtered.filter(q => q.topic === dsaState.filters.topic);
  }

  // Difficulty filter
  if (dsaState.filters.difficulty.length > 0) {
    filtered = filtered.filter(q => dsaState.filters.difficulty.includes(q.difficulty));
  }

  // Company filter
  if (dsaState.filters.companies.length > 0) {
    filtered = filtered.filter(q =>
      q.companies.some(c => dsaState.filters.companies.includes(c))
    );
  }

  // Search filter
  if (dsaState.filters.search) {
    const searchLower = dsaState.filters.search.toLowerCase();
    filtered = filtered.filter(q =>
      q.question.toLowerCase().includes(searchLower) ||
      q.number.toLowerCase().includes(searchLower)
    );
  }

  // Bookmarked only
  if (dsaState.filters.bookmarkedOnly) {
    filtered = filtered.filter(q => isBookmarked(q.id));
  }

  dsaState.filteredQuestions = filtered;
  renderQuestions(filtered);
  updateQuestionCounter(filtered.length);
}

// ========== MARK SOLVED ==========
export function markSolved(questionId) {
  const isSolved = isQuestionSolved(questionId);

  if (isSolved) {
    removeProgress(questionId);
  } else {
    saveProgress(questionId);
  }

  // Update UI
  const card = document.querySelector(`[data-question-id="${questionId}"]`);
  if (card) {
    const checkbox = card.querySelector('.solved-checkbox');
    const markBtn = card.querySelector('.mark-solved-btn');

    checkbox.classList.toggle('solved');
    checkbox.textContent = !isSolved ? '✓' : '';

    markBtn.classList.toggle('solved');
    markBtn.textContent = !isSolved ? '✓ Solved' : 'Mark Solved';
  }

  // Update counters
  updateTopicCounters();
  updateTotalCounter();

  // Show toast
  showToast(!isSolved ? '✓ Question marked as solved!' : 'Question unmarked');
}

// ========== UPDATE COUNTERS ==========
export function updateTopicCounters() {
  const topicOrder = ['Arrays', 'Strings', 'Linked Lists', 'Stacks & Queues', 'Trees', 'Graphs', 'Dynamic Programming', 'Greedy', 'Backtracking', 'Segment Trees'];

  topicOrder.forEach(topic => {
    const topicQuestions = dsaState.allQuestions.filter(q => q.topic === topic);
    const solvedCount = topicQuestions.filter(q => isQuestionSolved(q.id)).length;

    const topicLabel = document.querySelector(`.topic-solved-${topic.replace(/ /g, '-')}`);
    if (topicLabel) {
      topicLabel.textContent = solvedCount;
    }

    // Update progress bar
    const accordion = document.querySelector(`.accordion-topic-name:contains("${topic}")`)?.closest('.accordion-item');
    if (accordion) {
      const progressFill = accordion.querySelector('.accordion-progress-fill');
      if (progressFill) {
        progressFill.style.width = `${(solvedCount / topicQuestions.length) * 100}%`;
      }
    }
  });
}

export function updateTotalCounter() {
  const solved = getSolvedQuestions().length;
  const total = dsaState.allQuestions.length;

  const counterElement = document.querySelector('.dsa-counter');
  if (counterElement) {
    counterElement.textContent = `${solved}/${total} Questions`;
  }

  // Update progress ring
  const progressRing = document.querySelector('.progress-ring-fill');
  if (progressRing) {
    const circumference = 2 * Math.PI * 45; // radius = 45
    const percent = (solved / total) * 100;
    const dashoffset = circumference - (percent / 100) * circumference;
    progressRing.style.strokeDashoffset = dashoffset;
  }

  // Update progress number
  const progressNumber = document.querySelector('.progress-number');
  if (progressNumber) {
    progressNumber.innerHTML = `<span>${solved}</span><span class="progress-slash">/</span><span>${total}</span>`;
  }
}

export function updateQuestionCounter(count) {
  const counter = document.querySelector('.questions-counter');
  if (counter) {
    counter.textContent = `${count} Question${count !== 1 ? 's' : ''}`;
  }
}

// ========== FILTER SETUP ==========
export function setupFilters() {
  // Topic filters
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', function() {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('filter-pill-active'));
      this.classList.add('filter-pill-active');
      dsaState.filters.topic = this.dataset.topic || 'All';
      filterQuestions();
    });
  });

  // Difficulty filters
  document.querySelectorAll('.difficulty-filter').forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
      const difficulty = this.dataset.difficulty;
      if (this.classList.contains('active')) {
        if (!dsaState.filters.difficulty.includes(difficulty)) {
          dsaState.filters.difficulty.push(difficulty);
        }
      } else {
        dsaState.filters.difficulty = dsaState.filters.difficulty.filter(d => d !== difficulty);
      }
      filterQuestions();
    });
  });

  // Company filters
  document.querySelectorAll('.company-filter').forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
      const company = this.dataset.company;
      if (this.classList.contains('active')) {
        if (!dsaState.filters.companies.includes(company)) {
          dsaState.filters.companies.push(company);
        }
      } else {
        dsaState.filters.companies = dsaState.filters.companies.filter(c => c !== company);
      }
      filterQuestions();
    });
  });

  // Search input
  const searchInput = document.querySelector('.dsa-search-input');
  if (searchInput) {
    const debouncedSearch = debounce((e) => {
      dsaState.filters.search = e.target.value;
      filterQuestions();
      updateSearchClearBtn();
    }, 300);
    searchInput.addEventListener('input', debouncedSearch);
  }

  // Search clear button
  const clearBtn = document.querySelector('.search-clear-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      dsaState.filters.search = '';
      filterQuestions();
      updateSearchClearBtn();
    });
  }

  // Bookmarked filter
  const bookmarkedBtn = document.querySelector('.bookmarked-filter-btn');
  if (bookmarkedBtn) {
    bookmarkedBtn.addEventListener('click', function() {
      this.classList.toggle('filter-pill-active');
      dsaState.filters.bookmarkedOnly = this.classList.contains('filter-pill-active');
      filterQuestions();
    });
  }

  // Reset filters
  const resetBtn = document.querySelector('.reset-filters-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      dsaState.filters = {
        topic: 'All',
        difficulty: [],
        companies: [],
        bookmarkedOnly: false,
        search: ''
      };
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('filter-pill-active'));
      document.querySelector('[data-topic="All"]')?.classList.add('filter-pill-active');
      document.querySelectorAll('.difficulty-filter, .company-filter, .bookmarked-filter-btn').forEach(btn => btn.classList.remove('active'));
      searchInput.value = '';
      filterQuestions();
    });
  }
}

function updateSearchClearBtn() {
  const clearBtn = document.querySelector('.search-clear-btn');
  if (clearBtn) {
    clearBtn.classList.toggle('show', dsaState.filters.search.length > 0);
  }
}

// ========== UTILITY FUNCTIONS ==========
function calculateTopicCounts() {
  const topicOrder = ['Arrays', 'Strings', 'Linked Lists', 'Stacks & Queues', 'Trees', 'Graphs', 'Dynamic Programming', 'Greedy', 'Backtracking', 'Segment Trees'];
  topicOrder.forEach(topic => {
    dsaState.topicCounts[topic] = dsaState.allQuestions.filter(q => q.topic === topic).length;
  });
}

function getTopicEmoji(topic) {
  const emojis = {
    'Arrays': '📊',
    'Strings': '📝',
    'Linked Lists': '🔗',
    'Stacks & Queues': '📦',
    'Trees': '🌳',
    'Graphs': '🕸️',
    'Dynamic Programming': '💭',
    'Greedy': '🏆',
    'Backtracking': '🔙',
    'Segment Trees': '🌲'
  };
  return emojis[topic] || '💻';
}

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: var(--purple);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 50px;
    box-shadow: 0 6px 20px rgba(108, 99, 255, 0.3);
    z-index: 1999;
    animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s forwards;
    font-weight: 600;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
