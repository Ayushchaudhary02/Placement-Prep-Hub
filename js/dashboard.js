function initDashboard() {

  function loadProgress(key, defaultValue) {
    const saved = localStorage.getItem('preppath_' + key);
    return saved !== null ? JSON.parse(saved) : defaultValue;
  }

  const solvedList = loadProgress('dsa_solved_map', {});
  const solvedCount = Object.values(solvedList).filter(v => v).length;
  const sessions = loadProgress('mock_sessions', []);
  const hrCount = loadProgress('hr_practiced', 0);
  const cardCount = loadProgress('cards_reviewed', 0);

  // Update stat cards
  const dsaEl = document.getElementById('dash-dsa');
  const sessEl = document.getElementById('dash-sessions');
  const hrEl = document.getElementById('dash-hr');
  const streakEl = document.getElementById('dash-streak');

  if (dsaEl) dsaEl.textContent = solvedCount;
  if (sessEl) sessEl.textContent = sessions.length;
  if (hrEl) hrEl.textContent = hrCount;

  // Streak calculation
  const activityDates = loadProgress('activity_dates', []);
  let streak = 0;
  const today = new Date().toLocaleDateString();
  const yesterday = new Date(Date.now() - 86400000).toLocaleDateString();
  if (activityDates.includes(today) || activityDates.includes(yesterday)) {
    let checkDate = new Date();
    while (true) {
      const dateStr = checkDate.toLocaleDateString();
      if (activityDates.includes(dateStr)) {
        streak++;
        checkDate = new Date(checkDate - 86400000);
      } else break;
    }
  }
  if (streakEl) streakEl.textContent = streak;

  // DSA topic bar chart
  const topics = ['Arrays','Strings','Linked Lists','Stacks/Queues','Trees','Graphs','DP','Greedy','Backtracking','Seg Trees'];
  const topicCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  Object.keys(solvedList).forEach(id => {
    if (id.includes('arrays')) topicCounts[0]++;
    else if (id.includes('strings')) topicCounts[1]++;
    else if (id.includes('linkedlists')) topicCounts[2]++;
    else if (id.includes('stacks')) topicCounts[3]++;
    else if (id.includes('trees')) topicCounts[4]++;
    else if (id.includes('graphs')) topicCounts[5]++;
    else if (id.includes('dp')) topicCounts[6]++;
    else if (id.includes('greedy')) topicCounts[7]++;
    else if (id.includes('backtracking')) topicCounts[8]++;
    else if (id.includes('segtrees')) topicCounts[9]++;
  });

  const dsaCtx = document.getElementById('dsaTopicChart');
  if (dsaCtx && window.Chart) {
    new Chart(dsaCtx, {
      type: 'bar',
      data: {
        labels: topics,
        datasets: [{
          label: 'Solved',
          data: topicCounts,
          backgroundColor: '#6C63FF',
          borderRadius: 6,
          borderSkipped: false
        }, {
          label: 'Remaining',
          data: topicCounts.map(c => 25 - c),
          backgroundColor: '#e8e4ff',
          borderRadius: 6,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { stacked: true, grid: { display: false }, ticks: { font: { size: 10 } } },
          y: { stacked: true, max: 25, grid: { color: '#f0f0f0' }, ticks: { stepSize: 5 } }
        }
      }
    });
  }

  // Session score line chart
  const sessionCtx = document.getElementById('sessionChart');
  if (sessionCtx && window.Chart && sessions.length > 0) {
    new Chart(sessionCtx, {
      type: 'line',
      data: {
        labels: sessions.map((s, i) => s.date || 'Session ' + (i + 1)),
        datasets: [{
          label: 'Score',
          data: sessions.map(s => s.score || 0),
          borderColor: '#6C63FF',
          backgroundColor: 'rgba(108, 99, 255, 0.1)',
          borderWidth: 2,
          pointBackgroundColor: '#6C63FF',
          pointRadius: 5,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { min: 0, max: 100, grid: { color: '#f0f0f0' }, ticks: { callback: v => v + '%' } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  } else if (sessionCtx && window.Chart) {
    new Chart(sessionCtx, {
      type: 'line',
      data: {
        labels: ['No sessions yet'],
        datasets: [{ data: [0], borderColor: '#e8e4ff', borderWidth: 2 }]
      },
      options: { responsive: true, plugins: { legend: { display: false } } }
    });
  }

  // 30-day activity heatmap (bar chart)
  const activityCtx = document.getElementById('activityChart');
  if (activityCtx && window.Chart) {
    const last30 = [];
    const last30Labels = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const label = d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
      const dateStr = d.toLocaleDateString();
      last30Labels.push(label);
      const activity = loadProgress('activity_' + dateStr, 0);
      last30.push(activity);
    }
    new Chart(activityCtx, {
      type: 'bar',
      data: {
        labels: last30Labels,
        datasets: [{
          data: last30,
          backgroundColor: last30.map(v => v > 0 ? '#6C63FF' : '#e8e4ff'),
          borderRadius: 3
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 9 }, maxRotation: 45 } },
          y: { grid: { color: '#f0f0f0' }, ticks: { stepSize: 1 } }
        }
      }
    });
  }

  // Placement readiness score
  const dsaScore = Math.min(solvedCount / 100, 1) * 40;
  const sessionScore = Math.min(sessions.length / 10, 1) * 25;
  const hrScore = Math.min(hrCount / 15, 1) * 20;
  const streakScore = Math.min(streak / 30, 1) * 15;
  const total = Math.round(dsaScore + sessionScore + hrScore + streakScore);

  const readinessEl = document.getElementById('dash-readiness');
  const readinessBar = document.getElementById('dash-readiness-bar');
  const readinessLabel = document.getElementById('dash-readiness-label');

  if (readinessEl) readinessEl.textContent = total + '%';
  if (readinessBar) setTimeout(() => { readinessBar.style.width = total + '%'; }, 300);
  if (readinessLabel) {
    if (total < 20) readinessLabel.textContent = 'Just getting started — keep going!';
    else if (total < 40) readinessLabel.textContent = 'Building momentum — stay consistent';
    else if (total < 60) readinessLabel.textContent = 'Good progress — you are on track';
    else if (total < 80) readinessLabel.textContent = 'Strong candidate — polish your projects';
    else readinessLabel.textContent = 'Placement ready — start applying now!';
  }

  // Save today as active day
  const dates = loadProgress('activity_dates', []);
  if (!dates.includes(today)) {
    dates.push(today);
    localStorage.setItem('preppath_activity_dates', JSON.stringify(dates));
  }
}

document.addEventListener('DOMContentLoaded', initDashboard);
