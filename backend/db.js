const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'preppath.db');
let db = null;

function getDb() {
  if (!db) {
    db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error('Error opening database:', err);
      } else {
        console.log('✓ Connected to SQLite database');
      }
    });
    
    // Enable foreign keys
    db.run('PRAGMA foreign_keys = ON');
  }
  return db;
}

function initDb() {
  return new Promise((resolve, reject) => {
    const database = getDb();

    database.serialize(() => {
      // Users table
      database.run(`
        CREATE TABLE IF NOT EXISTS users (
          id TEXT PRIMARY KEY,
          name TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `, (err) => {
        if (err) console.error('Error creating users table:', err);
        else console.log('✓ Users table ready');
      });

      // Progress table
      database.run(`
        CREATE TABLE IF NOT EXISTS progress (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          userId TEXT NOT NULL,
          questionId TEXT NOT NULL,
          solved BOOLEAN DEFAULT 0,
          bookmarked BOOLEAN DEFAULT 0,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY(userId) REFERENCES users(id),
          UNIQUE(userId, questionId)
        )
      `, (err) => {
        if (err) console.error('Error creating progress table:', err);
        else console.log('✓ Progress table ready');
      });

      // Selected track table
      database.run(`
        CREATE TABLE IF NOT EXISTS user_tracks (
          userId TEXT PRIMARY KEY,
          track TEXT,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY(userId) REFERENCES users(id)
        )
      `, (err) => {
        if (err) console.error('Error creating user_tracks table:', err);
        else console.log('✓ User tracks table ready');
      });

      // Mock sessions table
      database.run(`
        CREATE TABLE IF NOT EXISTS sessions (
          id TEXT PRIMARY KEY,
          userId TEXT NOT NULL,
          company TEXT NOT NULL,
          difficulty TEXT,
          score INTEGER,
          questionsAttempted INTEGER,
          hintsUsed INTEGER,
          timeTaken INTEGER,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY(userId) REFERENCES users(id)
        )
      `, (err) => {
        if (err) console.error('Error creating sessions table:', err);
        else console.log('✓ Sessions table ready');
      });

      // Create indexes for better query performance
      database.run(`CREATE INDEX IF NOT EXISTS idx_progress_userId ON progress(userId)`);
      database.run(`CREATE INDEX IF NOT EXISTS idx_sessions_userId ON sessions(userId)`);
      database.run(`CREATE INDEX IF NOT EXISTS idx_sessions_score ON sessions(score DESC)`);

      resolve();
    });
  });
}

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    getDb().run(sql, params, function(err) {
      if (err) {
        console.error('Database run error:', err);
        reject(err);
      } else {
        resolve({ id: this.lastID, changes: this.changes });
      }
    });
  });
}

function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    getDb().get(sql, params, (err, row) => {
      if (err) {
        console.error('Database get error:', err);
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    getDb().all(sql, params, (err, rows) => {
      if (err) {
        console.error('Database all error:', err);
        reject(err);
      } else {
        resolve(rows || []);
      }
    });
  });
}

function closeDb() {
  return new Promise((resolve, reject) => {
    if (db) {
      db.close((err) => {
        if (err) reject(err);
        else resolve();
      });
    } else {
      resolve();
    }
  });
}

module.exports = {
  getDb,
  initDb,
  run,
  get,
  all,
  closeDb
};
