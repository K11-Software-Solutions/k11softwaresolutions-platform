import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { openDb } from '../config/sqlite.js';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

export async function sqliteLogin(req, res) {
  const { email, password } = req.body;
  try {
    const db = await openDb();
    const user = await db.get('SELECT * FROM users WHERE email = ?', email);
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email, subscription: user.subscription } });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

export async function sqliteRegister(req, res) {
  const { name, email, password, subscription = 'basic' } = req.body;
  try {
    const db = await openDb();
    const existing = await db.get('SELECT * FROM users WHERE email = ?', email);
    if (existing) return res.status(400).json({ msg: 'User already exists' });
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.run(
      'INSERT INTO users (name, email, password, subscription) VALUES (?, ?, ?, ?)',
      name, email, hashedPassword, subscription
    );
    const user = { id: result.lastID, name, email, subscription };
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}
