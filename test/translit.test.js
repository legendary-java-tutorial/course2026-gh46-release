import test from 'node:test';
import assert from 'node:assert/strict';
import { translit } from '../src/index.js';

test('имя латиницей', () => {
  assert.equal(translit('Анна Щукина'), 'Anna Shchukina');
});
