import bcrypt from 'bcryptjs';

const COST_FACTOR = 12;

// Precomputed so a login against an unknown email still runs a compare of
// similar cost, keeping response timing consistent with a real user lookup.
const DUMMY_HASH = bcrypt.hashSync('dummy-password-for-timing', COST_FACTOR);

export function hashPassword(password) {
  return bcrypt.hash(password, COST_FACTOR);
}

export function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash || DUMMY_HASH);
}
