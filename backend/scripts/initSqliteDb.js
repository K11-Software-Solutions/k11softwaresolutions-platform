import { openDb } from '../config/sqlite.js';

(async () => {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      subscription TEXT DEFAULT 'basic'
    );
  `);
  console.log('SQLite users table ready.');
  await db.close();
})();
