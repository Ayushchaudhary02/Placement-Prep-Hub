const StreakManager = {

  getTodayStr() {
    return new Date().toLocaleDateString('en-IN');
  },

  getYesterdayStr() {
    return new Date(Date.now() - 86400000).toLocaleDateString('en-IN');
  },

  load(key, def) {
    const v = localStorage.getItem('preppath_' + key);
    return v !== null ? JSON.parse(v) : def;
  },

  save(key, val) {
    localStorage.setItem('preppath_' + key, JSON.stringify(val));
  },

  recordActivity() {
    const today = this.getTodayStr();
    const dates = this.load('streak_dates', []);
    if (!dates.includes(today)) {
      dates.push(today);
      this.save('streak_dates', dates);
    }
    this.updateStreakUI();
  },

  getCurrentStreak() {
    const dates = this.load('streak_dates', []);
    if (dates.length === 0) return 0;
    let streak = 0;
    let check = new Date();
    const today = this.getTodayStr();
    const yesterday = this.getYesterdayStr();
    if (!dates.includes(today) && !dates.includes(yesterday)) return 0;
    while (true) {
      const dateStr = check.toLocaleDateString('en-IN');
      if (dates.includes(dateStr)) {
        streak++;
        check = new Date(check - 86400000);
      } else break;
    }
    return streak;
  },

  getLongestStreak() {
    const dates = this.load('streak_dates', []);
    if (dates.length === 0) return 0;
    const sorted = dates
      .map(d => new Date(d.split('/').reverse().join('-')))
      .sort((a, b) => a - b);
    let longest = 1, current = 1;
    for (let i = 1; i < sorted.length; i++) {
      const diff = (sorted[i] - sorted[i-1]) / 86400000;
      if (diff === 1) { current++; longest = Math.max(longest, current); }
      else current = 1;
    }
    return longest;
  },

  getLast14Days() {
    const dates = this.load('streak_dates', []);
    const result = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const dateStr = d.toLocaleDateString('en-IN');
      const dayLabel = d.toLocaleDateString('en-IN', { weekday: 'short' });
      result.push({ 
        date: dateStr, 
        label: dayLabel, 
        active: dates.includes(dateStr),
        isToday: i === 0
      });
    }
    return result;
  },

  getHabits() {
    return this.load('habits', {
      dsa: false,
      hr: false,
      english: false,
      github: false,
      linkedin: false
    });
  },

  toggleHabit(name) {
    const habits = this.getHabits();
    habits[name] = !habits[name];
    this.save('habits', habits);
    const today = this.getTodayStr();
    const lastReset = this.load('habits_last_reset', '');
    if (lastReset !== today) {
      this.save('habits', { dsa: false, hr: false, english: false, github: false, linkedin: false });
      this.save('habits_last_reset', today);
      habits[name] = true;
      this.save('habits', habits);
    }
    const allDone = Object.values(habits).every(v => v === true);
    if (allDone) this.recordActivity();
    this.updateStreakUI();
    return habits[name];
  },

  resetHabitsIfNewDay() {
    const today = this.getTodayStr();
    const lastReset = this.load('habits_last_reset', '');
    if (lastReset !== today) {
      this.save('habits', { dsa: false, hr: false, english: false, github: false, linkedin: false });
      this.save('habits_last_reset', today);
    }
  },

  updateStreakUI() {
    const streak = this.getCurrentStreak();
    const longest = this.getLongestStreak();
    const days = this.getLast14Days();
    const habits = this.getHabits();
    const habitsCount = Object.values(habits).filter(v => v).length;

    const streakNumEl = document.getElementById('streak-number');
    const longestEl = document.getElementById('streak-longest');
    const streakDaysEl = document.getElementById('streak-days');
    const habitsCountEl = document.getElementById('habits-done-count');

    if (streakNumEl) streakNumEl.textContent = streak;
    if (longestEl) longestEl.textContent = longest;
    if (habitsCountEl) habitsCountEl.textContent = habitsCount + '/5 done today';

    if (streakDaysEl) {
      streakDaysEl.innerHTML = days.map(d => `
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
          <div style="
            width: 36px; height: 36px; border-radius: 50%;
            background: ${d.active ? '#6C63FF' : d.isToday ? '#e8e4ff' : '#f0f0f0'};
            border: ${d.isToday ? '2px solid #6C63FF' : '2px solid transparent'};
            display: flex; align-items: center; justify-content: center;
            font-size: 14px;
          ">${d.active ? '🔥' : d.isToday ? '⭕' : ''}</div>
          <span style="font-size: 10px; color: #888;">${d.label}</span>
        </div>
      `).join('');
    }

    const habitDefs = [
      { key: 'dsa', label: 'Solve 2 DSA problems', icon: '💻' },
      { key: 'hr', label: 'Practice 1 HR question', icon: '🗣️' },
      { key: 'english', label: 'Read English article', icon: '📖' },
      { key: 'github', label: 'Make a GitHub commit', icon: '🐙' },
      { key: 'linkedin', label: 'Post on LinkedIn', icon: '🔗' }
    ];

    habitDefs.forEach(h => {
      const btn = document.getElementById('habit-' + h.key);
      if (btn) {
        btn.style.background = habits[h.key] ? '#6C63FF' : 'white';
        btn.style.color = habits[h.key] ? 'white' : '#333';
        btn.style.borderColor = habits[h.key] ? '#6C63FF' : '#e0e0e0';
        btn.textContent = (habits[h.key] ? '✓ ' : '') + h.icon + ' ' + h.label;
      }
    });

    const heroStreak = document.getElementById('hero-streak');
    if (heroStreak) heroStreak.textContent = streak;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  StreakManager.resetHabitsIfNewDay();
  StreakManager.updateStreakUI();
});
