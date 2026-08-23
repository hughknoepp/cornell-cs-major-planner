import { Router } from 'express';
import db from '../db/connection.js';
import { hashPassword, verifyPassword } from '../lib/password.js';
import { signToken, cookieOptions } from '../lib/jwt.js';
import { isValidEmail, isValidPassword } from '../lib/validators.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

const getUserByEmail = db.prepare('SELECT * FROM users WHERE email = ?');
const getUserById = db.prepare('SELECT id, email FROM users WHERE id = ?');
const insertUser = db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)');

router.post('/signup', async (req, res) => {
  const { email, password } = req.body ?? {};

  if (!isValidEmail(email) || !isValidPassword(password)) {
    return res.status(400).json({ error: 'invalid_input' });
  }

  if (getUserByEmail.get(email)) {
    return res.status(409).json({ error: 'email_in_use' });
  }

  const passwordHash = await hashPassword(password);
  const { lastInsertRowid: userId } = insertUser.run(email, passwordHash);

  const token = signToken(userId);
  res.cookie('token', token, cookieOptions());
  res.status(201).json({ user: { id: userId, email } });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body ?? {};

  if (!isValidEmail(email) || !isValidPassword(password)) {
    return res.status(401).json({ error: 'invalid_credentials' });
  }

  const user = getUserByEmail.get(email);
  const passwordMatches = await verifyPassword(password, user?.password_hash);

  if (!user || !passwordMatches) {
    return res.status(401).json({ error: 'invalid_credentials' });
  }

  const token = signToken(user.id);
  res.cookie('token', token, cookieOptions());
  res.json({ user: { id: user.id, email: user.email } });
});

router.post('/logout', (req, res) => {
  res.clearCookie('token', cookieOptions());
  res.status(204).end();
});

router.get('/me', requireAuth, (req, res) => {
  const user = getUserById.get(req.userId);

  if (!user) {
    return res.status(401).json({ error: 'not_authenticated' });
  }

  res.json({ user });
});

export default router;
