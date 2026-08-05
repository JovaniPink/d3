import assert from 'node:assert/strict';
import test from 'node:test';

import { findSample } from '../static/js/samples.js';

const collection = [
  { id: 940, value: 'first' },
  { id: 941, value: 'second' },
];

test('finds a sample when the selector is a string', () => {
  assert.deepEqual(findSample(collection, '940'), collection[0]);
});

test('throws when a sample does not exist', () => {
  assert.throws(() => findSample(collection, '999'), /Unknown sample: 999/);
});
