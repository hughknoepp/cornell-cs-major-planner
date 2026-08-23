import { Router } from 'express';
import db from '../db/connection.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

const getProgress = db.prepare('SELECT data FROM progress WHERE user_id = ?');
const upsertProgress = db.prepare(`
  INSERT INTO progress (user_id, data, updated_at)
  VALUES (?, ?, datetime('now'))
  ON CONFLICT(user_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at
`);

const EMPTY_PROGRESS = {
  introCSCompleted: [],
  mathCompleted: [],
  coreCompleted: [],
  electivesCompleted: [],
  practicumCompleted: [],
  allCompleted: [],
};

router.use(requireAuth);

router.get('/', (req, res) => {
  const row = getProgress.get(req.userId);
  const data = row ? JSON.parse(row.data) : EMPTY_PROGRESS;
  res.json({ data });
});

router.put('/', (req, res) => {
  const { data } = req.body ?? {};

  if (typeof data !== 'object' || data === null) {
    return res.status(400).json({ error: 'invalid_input' });
  }

  const serialized = JSON.stringify(data);
  upsertProgress.run(req.userId, serialized);
  res.json({ ok: true, updatedAt: new Date().toISOString() });
});

export default router;
