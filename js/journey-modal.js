console.log('journey-modal.js loaded');

const JourneyModal = (() => {
  const state = {
    currentView: 'A',
    checklist: {
      task1: false,
      task2: false,
      task3: false,
      task4: false,
      task5: false,
      task6: false,
      task7: false
    }
  };

  const createModal = () => {
    const modal = document.createElement('div');
    modal.id = 'journey-modal-overlay';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.75);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      padding: 20px;
      box-sizing: border-box;
      animation: journeyFadeIn 0.3s ease;
    `;

    modal.innerHTML = `
      <style>
        @keyframes journeyFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        #journey-modal-box {
          background: white;
          border-radius: 20px;
          padding: 40px;
          width: 100%;
          max-width: 900px;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: relative;
        }
        #journey-modal-box::-webkit-scrollbar {
          width: 8px;
        }
        #journey-modal-box::-webkit-scrollbar-thumb {
          background: #6C63FF;
          border-radius: 4px;
        }
        .journey-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        .journey-back-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #6C63FF;
          display: none;
        }
        .journey-back-btn.show {
          display: block;
        }
        .journey-title {
          font-size: 28px;
          font-weight: 800;
          color: #1a1a2e;
          font-family: 'Poppins', sans-serif;
          flex: 1;
        }
        .journey-close-btn {
          background: none;
          border: none;
          font-size: 32px;
          cursor: pointer;
          color: #999;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .journey-close-btn:hover {
          color: #333;
        }
        
        /* VIEW A - Option Cards */
        .journey-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }
        .journey-option-card {
          padding: 30px;
          border-radius: 16px;
          border: 2px solid #e5e7eb;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }
        .journey-option-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .journey-option-card.green {
          border-color: #43e97b;
          background: rgba(67, 233, 123, 0.05);
        }
        .journey-option-card.green:hover {
          background: rgba(67, 233, 123, 0.1);
        }
        .journey-option-card.purple {
          border-color: #6C63FF;
          background: rgba(108, 99, 255, 0.05);
        }
        .journey-option-card.purple:hover {
          background: rgba(108, 99, 255, 0.1);
        }
        .journey-option-card.amber {
          border-color: #FF9A3C;
          background: rgba(255, 154, 60, 0.05);
        }
        .journey-option-card.amber:hover {
          background: rgba(255, 154, 60, 0.1);
        }
        .journey-option-icon {
          font-size: 48px;
          margin-bottom: 15px;
        }
        .journey-option-title {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 10px;
          font-family: 'Poppins', sans-serif;
        }
        .journey-option-desc {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.5;
        }
        
        /* VIEW B - Checklist */
        .journey-checklist {
          display: none;
        }
        .journey-checklist.show {
          display: block;
        }
        .journey-checklist-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 15px;
          margin-bottom: 12px;
          border-radius: 10px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          transition: all 0.2s ease;
        }
        .journey-checklist-item.done {
          background: #f0fdf4;
          border-color: #43e97b;
        }
        .journey-checklist-item.done .journey-checklist-text {
          color: #6b7280;
          text-decoration: line-through;
        }
        .journey-checklist-checkbox {
          width: 24px;
          height: 24px;
          border: 2px solid #d1d5db;
          border-radius: 6px;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          transition: all 0.2s ease;
        }
        .journey-checklist-item.done .journey-checklist-checkbox {
          background: #43e97b;
          border-color: #43e97b;
          color: white;
          font-size: 14px;
          font-weight: bold;
        }
        .journey-checklist-text {
          flex: 1;
          font-size: 15px;
          color: #1a1a2e;
          line-height: 1.5;
        }
        .journey-checklist-time {
          font-size: 12px;
          color: #9ca3af;
          margin-top: 4px;
        }
        .journey-quote-box {
          background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
          color: white;
          padding: 25px;
          border-radius: 12px;
          margin-top: 30px;
          font-size: 15px;
          line-height: 1.7;
          font-style: italic;
        }
        
        /* VIEW C - Roadmap */
        .journey-roadmap {
          display: none;
        }
        .journey-roadmap.show {
          display: block;
        }
        .journey-roadmap-month {
          margin-bottom: 30px;
          padding-left: 30px;
          border-left: 4px solid;
          position: relative;
        }
        .journey-roadmap-month.month-1 {
          border-left-color: #6C63FF;
        }
        .journey-roadmap-month.month-2 {
          border-left-color: #4facfe;
        }
        .journey-roadmap-month.month-3 {
          border-left-color: #43E8D8;
        }
        .journey-roadmap-month.month-4 {
          border-left-color: #43e97b;
        }
        .journey-roadmap-month.month-5 {
          border-left-color: #FFD93D;
        }
        .journey-roadmap-month.month-6 {
          border-left-color: #FF6584;
        }
        .journey-roadmap-month::before {
          content: '';
          position: absolute;
          left: -12px;
          top: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          border: 4px solid;
          border-color: inherit;
        }
        .journey-roadmap-title {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 12px;
          font-family: 'Poppins', sans-serif;
        }
        .journey-roadmap-subtitle {
          font-size: 13px;
          color: #9ca3af;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .journey-roadmap-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .journey-roadmap-item {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
          padding: 8px 0;
          border-bottom: 1px solid #f3f4f6;
        }
        .journey-roadmap-item:last-child {
          border-bottom: none;
        }
        .journey-roadmap-week {
          font-size: 12px;
          color: #d1d5db;
          font-weight: 500;
        }
        
        /* VIEW D - Tips */
        .journey-tips {
          display: none;
        }
        .journey-tips.show {
          display: block;
        }
        .journey-tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .journey-tip-card {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 25px;
          border-top: 4px solid #6C63FF;
        }
        .journey-tip-card:nth-child(2) {
          border-top-color: #FF6584;
        }
        .journey-tip-card:nth-child(3) {
          border-top-color: #43e97b;
        }
        .journey-tip-card:nth-child(4) {
          border-top-color: #FF9A3C;
        }
        .journey-tip-card:nth-child(5) {
          border-top-color: #4facfe;
        }
        .journey-tip-title {
          font-size: 16px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 12px;
          font-family: 'Poppins', sans-serif;
        }
        .journey-tip-text {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.7;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          #journey-modal-box {
            padding: 25px;
            max-height: 90vh;
          }
          .journey-title {
            font-size: 22px;
          }
          .journey-options {
            grid-template-columns: 1fr;
          }
          .journey-option-card {
            padding: 20px;
          }
          .journey-tips-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <div id="journey-modal-box">
        <div class="journey-header">
          <button class="journey-back-btn">←</button>
          <h2 class="journey-title">Start Your Placement Journey</h2>
          <button class="journey-close-btn">✕</button>
        </div>

        <!-- VIEW A: Options -->
        <div id="journey-view-a" class="show">
          <div class="journey-options">
            <div class="journey-option-card green" data-action="view-b">
              <div class="journey-option-icon">🚀</div>
              <div class="journey-option-title">Start Today</div>
              <div class="journey-option-desc">7 things to do right now (2 hours total)</div>
            </div>
            <div class="journey-option-card purple" data-action="view-c">
              <div class="journey-option-icon">📅</div>
              <div class="journey-option-title">6-Month Roadmap</div>
              <div class="journey-option-desc">Your complete month-by-month plan</div>
            </div>
            <div class="journey-option-card amber" data-action="view-d">
              <div class="journey-option-icon">💡</div>
              <div class="journey-option-title">Specific Tips</div>
              <div class="journey-option-desc">5 things most students miss</div>
            </div>
          </div>
        </div>

        <!-- VIEW B: Start Today Checklist -->
        <div id="journey-view-b">
          <div class="journey-checklist">
            <div class="journey-checklist-item">
              <div class="journey-checklist-checkbox">✓</div>
              <div>
                <div class="journey-checklist-text">Open PrepPath and pick your domain track — commit to one</div>
                <div class="journey-checklist-time">10 min</div>
              </div>
            </div>
            <div class="journey-checklist-item">
              <div class="journey-checklist-checkbox">✓</div>
              <div>
                <div class="journey-checklist-text">Create LeetCode account and solve "Two Sum" — your first easy question</div>
                <div class="journey-checklist-time">30 min</div>
              </div>
            </div>
            <div class="journey-checklist-item">
              <div class="journey-checklist-checkbox">✓</div>
              <div>
                <div class="journey-checklist-text">Set up GitHub profile — add photo, bio mentioning your track</div>
                <div class="journey-checklist-time">15 min</div>
              </div>
            </div>
            <div class="journey-checklist-item">
              <div class="journey-checklist-checkbox">✓</div>
              <div>
                <div class="journey-checklist-text">Update LinkedIn headline: "CS Student | [Your Track] | Seeking Placement 2025"</div>
                <div class="journey-checklist-time">10 min</div>
              </div>
            </div>
            <div class="journey-checklist-item">
              <div class="journey-checklist-checkbox">✓</div>
              <div>
                <div class="journey-checklist-text">Solve 2 more Easy LeetCode questions before sleeping</div>
                <div class="journey-checklist-time">45 min</div>
              </div>
            </div>
            <div class="journey-checklist-item">
              <div class="journey-checklist-checkbox">✓</div>
              <div>
                <div class="journey-checklist-text">Record a 2-minute video of yourself introducing yourself in English</div>
                <div class="journey-checklist-time">10 min</div>
              </div>
            </div>
            <div class="journey-checklist-item">
              <div class="journey-checklist-checkbox">✓</div>
              <div>
                <div class="journey-checklist-text">Bookmark your PrepPath website and open it every morning</div>
                <div class="journey-checklist-time">2 min</div>
              </div>
            </div>
            <div class="journey-quote-box">
              "The goal today is not to be perfect. The goal is to start. One LeetCode problem solved today is worth more than a perfect plan you never execute. Start messy. Fix it tomorrow."
            </div>
          </div>
        </div>

        <!-- VIEW C: 6-Month Roadmap -->
        <div id="journey-view-c">
          <div class="journey-roadmap">
            <div class="journey-roadmap-month month-1">
              <div class="journey-roadmap-title">Month 1 — Foundation</div>
              <div class="journey-roadmap-subtitle">DSA + Track Selection</div>
              <div class="journey-roadmap-items">
                <div class="journey-roadmap-item">Pick your domain track (Full-Stack / ML / DevOps / Mobile) <span class="journey-roadmap-week">— Week 1</span></div>
                <div class="journey-roadmap-item">Solve 25 Easy Array + String questions on LeetCode <span class="journey-roadmap-week">— Week 1</span></div>
                <div class="journey-roadmap-item">Complete one beginner tutorial in your chosen track <span class="journey-roadmap-week">— Week 1-2</span></div>
                <div class="journey-roadmap-item">Create LeetCode + LinkedIn + GitHub accounts <span class="journey-roadmap-week">— Week 1</span></div>
                <div class="journey-roadmap-item">Solve 15 Linked List + Stack/Queue questions <span class="journey-roadmap-week">— Week 3-4</span></div>
                <div class="journey-roadmap-item"><strong>Target: 40 LeetCode problems solved by end of month</strong></div>
              </div>
            </div>

            <div class="journey-roadmap-month month-2">
              <div class="journey-roadmap-title">Month 2 — Go Deep</div>
              <div class="journey-roadmap-subtitle">Domain + Project 1</div>
              <div class="journey-roadmap-items">
                <div class="journey-roadmap-item">Complete core course in your track (Odin Project / Kaggle / TechWorld) <span class="journey-roadmap-week">— Full month</span></div>
                <div class="journey-roadmap-item">Start Project 1 — a real-use project that solves a problem you faced <span class="journey-roadmap-week">— Week 3</span></div>
                <div class="journey-roadmap-item">Solve Trees + Graphs questions (25 each) on LeetCode <span class="journey-roadmap-week">— Ongoing</span></div>
                <div class="journey-roadmap-item">Post your first LinkedIn update about what you are learning <span class="journey-roadmap-week">— Week 2</span></div>
              </div>
            </div>

            <div class="journey-roadmap-month month-3">
              <div class="journey-roadmap-title">Month 3-4 — Projects & Visibility</div>
              <div class="journey-roadmap-subtitle">Build + Show Your Work</div>
              <div class="journey-roadmap-items">
                <div class="journey-roadmap-item">Complete 2-3 Medium LeetCode problems per day (total: 120 problems)</div>
                <div class="journey-roadmap-item">Deploy Project 2 to GitHub and write a detailed README</div>
                <div class="journey-roadmap-item">Share your learning journey on LinkedIn (1 post per week)</div>
                <div class="journey-roadmap-item">Start practicing HR questions (mock interviews)</div>
              </div>
            </div>

            <div class="journey-roadmap-month month-4">
              <div class="journey-roadmap-title">Month 5-6 — Refinement & Placement</div>
              <div class="journey-roadmap-subtitle">Polish Your Profile</div>
              <div class="journey-roadmap-items">
                <div class="journey-roadmap-item">Complete all 3 major projects and get them on GitHub</div>
                <div class="journey-roadmap-item">Solve 200+ LeetCode problems across all difficulty levels</div>
                <div class="journey-roadmap-item">Practice HR rounds daily using PrepPath HR modal (30 questions)</div>
                <div class="journey-roadmap-item">Optimize resume with projects, GitHub links, and LeetCode stats</div>
                <div class="journey-roadmap-item"><strong>Ready for interviews and placements!</strong></div>
              </div>
            </div>
          </div>
        </div>

        <!-- VIEW D: Tips -->
        <div id="journey-view-d">
          <div class="journey-tips">
            <div class="journey-tips-grid">
              <div class="journey-tip-card">
                <div class="journey-tip-title">📱 Use PrepPath in Every Interview</div>
                <div class="journey-tip-text">Say: "I built a full placement preparation platform called PrepPath — it has 250 DSA questions, a mock interview simulator, HR round practice, and a 6-month roadmap. It is live on GitHub Pages." That one sentence is worth 3 certifications.</div>
              </div>
              <div class="journey-tip-card">
                <div class="journey-tip-title">🎙️ Use Your Own Mock Interview Daily</div>
                <div class="journey-tip-text">Open PrepPath every morning and do one 15-minute DSA session first. The HR modal has 30 real questions — practice all of them out loud this week.</div>
              </div>
              <div class="journey-tip-card">
                <div class="journey-tip-title">💚 Your GitHub Is Already Active</div>
                <div class="journey-tip-text">You just committed 16 files. Keep committing every single day. Recruiters at product companies look at GitHub before your resume. 90 days of green squares = instant credibility.</div>
              </div>
              <div class="journey-tip-card">
                <div class="journey-tip-title">🌐 Pick Full-Stack Web If Undecided</div>
                <div class="journey-tip-text">You already know HTML, CSS, JS from building PrepPath. Add React + Node.js + a database and you are job-ready. You are 2 months ahead of everyone else.</div>
              </div>
              <div class="journey-tip-card">
                <div class="journey-tip-title">📈 The Compound Effect Is Real</div>
                <div class="journey-tip-text">2 LeetCode problems per day = 60/month = 360 in 6 months. Most placed students have 150-200. Small daily actions compound into massive results.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    return modal;
  };

  const open = () => {
    console.log('openJourneyModal called');
    // Remove existing modal if any
    const existing = document.getElementById('journey-modal-overlay');
    if (existing) existing.remove();

    const modal = createModal();
    document.body.appendChild(modal);

    const overlay = modal;
    const box = modal.querySelector('#journey-modal-box');
    const closeBtn = modal.querySelector('.journey-close-btn');
    const backBtn = modal.querySelector('.journey-back-btn');

    // Close on backdrop click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });

    // Close button
    closeBtn.addEventListener('click', close);

    // Back button
    backBtn.addEventListener('click', () => {
      showView('A');
    });

    // Option card clicks
    modal.querySelectorAll('.journey-option-card').forEach((card) => {
      card.addEventListener('click', () => {
        const action = card.getAttribute('data-action');
        if (action === 'view-b') showView('B');
        else if (action === 'view-c') showView('C');
        else if (action === 'view-d') showView('D');
      });
    });

    // Checklist toggles
    modal.querySelectorAll('.journey-checklist-item').forEach((item, idx) => {
      item.addEventListener('click', () => {
        item.classList.toggle('done');
        const key = `task${idx + 1}`;
        state.checklist[key] = item.classList.contains('done');
        localStorage.setItem('journey_checklist', JSON.stringify(state.checklist));
      });
    });

    // Load saved checklist state
    const saved = localStorage.getItem('journey_checklist');
    if (saved) {
      state.checklist = JSON.parse(saved);
      modal.querySelectorAll('.journey-checklist-item').forEach((item, idx) => {
        if (state.checklist[`task${idx + 1}`]) {
          item.classList.add('done');
        }
      });
    }

    // Close on Escape
    const escapeHandler = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', escapeHandler);

    const close = () => {
      modal.style.animation = 'journeyFadeIn 0.3s ease reverse';
      setTimeout(() => {
        modal.remove();
        document.removeEventListener('keydown', escapeHandler);
      }, 300);
    };
  };

  const showView = (view) => {
    const modal = document.getElementById('journey-modal-overlay');
    if (!modal) return;

    // Hide all views
    modal.querySelectorAll('[id^="journey-view-"]').forEach((v) => {
      v.classList.remove('show');
      v.querySelector('[class*="journey-"]')?.classList.remove('show');
    });

    // Show selected view
    const selectedView = modal.querySelector(`#journey-view-${view}`);
    if (selectedView) {
      selectedView.classList.add('show');
      selectedView.querySelector('[class*="journey-"]')?.classList.add('show');
    }

    // Update back button
    const backBtn = modal.querySelector('.journey-back-btn');
    if (view === 'A') {
      backBtn.classList.remove('show');
    } else {
      backBtn.classList.add('show');
    }

    // Update title
    const titleEl = modal.querySelector('.journey-title');
    const titles = {
      'A': 'Start Your Placement Journey',
      'B': 'Start Today — 2 Hours to Action',
      'C': '6-Month Roadmap to Placement',
      'D': '5 Tips Most Students Miss'
    };
    titleEl.textContent = titles[view];

    state.currentView = view;
  };

  return { open };
})();

function openJourneyModal() {
  console.log('openJourneyModal wrapper called');
  JourneyModal.open();
}

// FIXED: Ensure buttons are available before attaching listeners
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', attachListeners);
} else {
  attachListeners();
}

function attachListeners() {
  console.log('Attaching listeners to Start Your Journey buttons');
  const btns = document.querySelectorAll('#start-journey-btn');
  console.log('Found buttons:', btns.length);
  
  btns.forEach((btn, index) => {
    console.log(`Attaching click listener to button ${index}`);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openJourneyModal();
    });
  });
}
