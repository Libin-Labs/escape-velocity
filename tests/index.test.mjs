import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('simple speed', () => {
  assert.ok(Math.abs(api.escapeSpeed(8, 4) - 2) < 1e-14);
});
test('Earth approximation', () => {
  assert.ok(Math.abs(api.escapeSpeed(3.986004418e14, 6371000) - 11186.135691389076) < 1e-6);
});
test('mass parameter', () => {
  assert.equal(api.gravitationalParameter(1), api.GRAVITATIONAL_CONSTANT);
});
test('ratio scale', () => {
  assert.ok(Math.abs(api.escapeSpeed(32, 4) / api.escapeSpeed(8, 4) - 2) < 1e-14);
});
test('extreme bounded inputs', () => {
  assert.ok(Number.isFinite(api.escapeSpeed(1e100, 1e-100)));
  assert.ok(api.escapeSpeed(1e-100, 1e100) > 0);
});
test('invalid positive inputs', () => {
  assert.throws(() => api.escapeSpeed(0, 1));
  assert.throws(() => api.escapeSpeed(1, -1));
  assert.throws(() => api.gravitationalParameter(Infinity));
});
