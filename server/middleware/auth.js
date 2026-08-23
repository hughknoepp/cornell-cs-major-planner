import { verifyToken } from '../lib/jwt.js';

export function requireAuth(req, res, next) {
  const token = req.cookies?.token;
  const payload = token && verifyToken(token);

  if (!payload) {
    return res.status(401).json({ error: 'not_authenticated' });
  }

  req.userId = payload.userId;
  next();
}
