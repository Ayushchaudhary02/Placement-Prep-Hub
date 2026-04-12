const PREFIX = 'preppath_';

// ========== DSA PROGRESS ==========

export function saveProgress(questionId) {
  try {
    const solved = getSolvedQuestions() || [];
    if (!solved.includes(questionId)) {
      solved.push(questionId);
    }
    localStorage.setItem(`${PREFIX}solved_questions`, JSON.stringify(solved));
    return true;
  } catch (error) {
    console.error('Error saving progress:', error);
    return null;
  }
}

export function removeProgress(questionId) {
  try {
    const solved = getSolvedQuestions() || [];
    const filtered = solved.filter(id => id !== questionId);
    localStorage.setItem(`${PREFIX}solved_questions`, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Error removing progress:', error);
    return null;
  }
}

export function getSolvedQuestions() {
  try {
    const data = localStorage.getItem(`${PREFIX}solved_questions`);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting solved questions:', error);
    return null;
  }
}

export function isQuestionSolved(questionId) {
  try {
    const solved = getSolvedQuestions() || [];
    return solved.includes(questionId);
  } catch (error) {
    console.error('Error checking if question solved:', error);
    return null;
  }
}

// ========== BOOKMARKS ==========

export function toggleBookmark(questionId) {
  try {
    const bookmarks = getBookmarks() || [];
    const index = bookmarks.indexOf(questionId);
    
    if (index > -1) {
      bookmarks.splice(index, 1);
    } else {
      bookmarks.push(questionId);
    }
    
    localStorage.setItem(`${PREFIX}bookmarks`, JSON.stringify(bookmarks));
    return true;
  } catch (error) {
    console.error('Error toggling bookmark:', error);
    return null;
  }
}

export function getBookmarks() {
  try {
    const data = localStorage.getItem(`${PREFIX}bookmarks`);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting bookmarks:', error);
    return null;
  }
}

export function isBookmarked(questionId) {
  try {
    const bookmarks = getBookmarks() || [];
    return bookmarks.includes(questionId);
  } catch (error) {
    console.error('Error checking if bookmarked:', error);
    return null;
  }
}

// ========== SELECTED TRACK ==========

export function saveSelectedTrack(trackName) {
  try {
    localStorage.setItem(`${PREFIX}selected_track`, trackName);
    return true;
  } catch (error) {
    console.error('Error saving selected track:', error);
    return null;
  }
}

export function getSelectedTrack() {
  try {
    const track = localStorage.getItem(`${PREFIX}selected_track`);
    return track || null;
  } catch (error) {
    console.error('Error getting selected track:', error);
    return null;
  }
}

// ========== MOCK INTERVIEW SESSIONS ==========

export function saveMockSession(result) {
  try {
    if (!result || typeof result !== 'object') {
      throw new Error('Invalid session result object');
    }

    const sessionWithTimestamp = {
      ...result,
      timestamp: new Date().toISOString(),
      id: `session_${Date.now()}`
    };

    const sessions = getMockSessions() || [];
    sessions.unshift(sessionWithTimestamp);

    // Keep only last 20 sessions
    if (sessions.length > 20) {
      sessions.pop();
    }

    localStorage.setItem(`${PREFIX}mock_sessions`, JSON.stringify(sessions));
    return sessionWithTimestamp;
  } catch (error) {
    console.error('Error saving mock session:', error);
    return null;
  }
}

export function getMockSessions() {
  try {
    const data = localStorage.getItem(`${PREFIX}mock_sessions`);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting mock sessions:', error);
    return null;
  }
}

// ========== ENGLISH COMMUNICATION STREAK ==========

export function saveEnglishStreak(days) {
  try {
    if (typeof days !== 'number' || days < 0) {
      throw new Error('Invalid days value');
    }

    const streakData = {
      days: days,
      lastUpdated: new Date().toISOString(),
      startDate: new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString()
    };

    localStorage.setItem(`${PREFIX}english_streak`, JSON.stringify(streakData));
    return streakData;
  } catch (error) {
    console.error('Error saving english streak:', error);
    return null;
  }
}

export function getEnglishStreak() {
  try {
    const data = localStorage.getItem(`${PREFIX}english_streak`);
    return data ? JSON.parse(data) : { days: 0, lastUpdated: null, startDate: null };
  } catch (error) {
    console.error('Error getting english streak:', error);
    return null;
  }
}

export function incrementStreak() {
  try {
    const streak = getEnglishStreak();
    
    if (!streak) {
      return saveEnglishStreak(1);
    }

    const lastUpdated = new Date(streak.lastUpdated);
    const today = new Date();
    const daysDiff = Math.floor((today - lastUpdated) / (24 * 60 * 60 * 1000));

    if (daysDiff >= 1) {
      return saveEnglishStreak(streak.days + 1);
    } else {
      // Already updated today
      return streak;
    }
  } catch (error) {
    console.error('Error incrementing streak:', error);
    return null;
  }
}

// ========== VISIBILITY SCORE ==========

export function saveVisibilityScore(checkedArray) {
  try {
    if (!Array.isArray(checkedArray)) {
      throw new Error('Invalid checked array');
    }

    const scoreData = {
      checklist: checkedArray,
      score: checkedArray.filter(item => item.checked).length,
      savedAt: new Date().toISOString()
    };

    localStorage.setItem(`${PREFIX}visibility_score`, JSON.stringify(scoreData));
    return scoreData;
  } catch (error) {
    console.error('Error saving visibility score:', error);
    return null;
  }
}

export function getVisibilityScore() {
  try {
    const data = localStorage.getItem(`${PREFIX}visibility_score`);
    return data ? JSON.parse(data) : { checklist: [], score: 0, savedAt: null };
  } catch (error) {
    console.error('Error getting visibility score:', error);
    return null;
  }
}

// ========== GITHUB CHECKLIST ==========

export function saveGithubChecklist(checkedArray) {
  try {
    if (!Array.isArray(checkedArray)) {
      throw new Error('Invalid checked array');
    }

    const checklistData = {
      items: checkedArray,
      completedCount: checkedArray.filter(item => item.completed).length,
      totalCount: checkedArray.length,
      savedAt: new Date().toISOString()
    };

    localStorage.setItem(`${PREFIX}github_checklist`, JSON.stringify(checklistData));
    return checklistData;
  } catch (error) {
    console.error('Error saving github checklist:', error);
    return null;
  }
}

export function getGithubChecklist() {
  try {
    const data = localStorage.getItem(`${PREFIX}github_checklist`);
    return data ? JSON.parse(data) : { items: [], completedCount: 0, totalCount: 0, savedAt: null };
  } catch (error) {
    console.error('Error getting github checklist:', error);
    return null;
  }
}

// ========== CLEAR ALL PROGRESS ==========

export function clearAllProgress() {
  try {
    const keys = Object.keys(localStorage);
    const prepPathKeys = keys.filter(key => key.startsWith(PREFIX));

    prepPathKeys.forEach(key => {
      localStorage.removeItem(key);
    });

    return {
      success: true,
      clearedCount: prepPathKeys.length,
      clearedKeys: prepPathKeys
    };
  } catch (error) {
    console.error('Error clearing all progress:', error);
    return null;
  }
}

// ========== UTILITY FUNCTIONS ==========

export function getProgressStats() {
  try {
    const solved = getSolvedQuestions() || [];
    const bookmarks = getBookmarks() || [];
    const sessions = getMockSessions() || [];
    const streak = getEnglishStreak();
    const visibility = getVisibilityScore();

    return {
      questionsAnswered: solved.length,
      bookmarkedQuestions: bookmarks.length,
      interviewSessionsCompleted: sessions.length,
      bestScore: sessions.length > 0 ? Math.max(...sessions.map(s => s.score || 0)) : 0,
      englishStreak: streak?.days || 0,
      visibilityScore: visibility?.score || 0,
      lastSessionDate: sessions.length > 0 ? sessions[0].timestamp : null
    };
  } catch (error) {
    console.error('Error getting progress stats:', error);
    return null;
  }
}

export function exportProgressData() {
  try {
    const stats = getProgressStats();
    const sessions = getMockSessions();
    const selectedTrack = getSelectedTrack();

    const exportData = {
      exportDate: new Date().toISOString(),
      stats: stats,
      selectedTrack: selectedTrack,
      recentSessions: sessions?.slice(0, 5) || [],
      totals: {
        questionsAnswered: stats?.questionsAnswered || 0,
        sessionCount: stats?.interviewSessionsCompleted || 0,
        bestScore: stats?.bestScore || 0
      }
    };

    return exportData;
  } catch (error) {
    console.error('Error exporting progress data:', error);
    return null;
  }
}
