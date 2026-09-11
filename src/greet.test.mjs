import test from 'node:test';
import assert from 'node:assert';
import { greet } from './greet.mjs';

test('greet returns a personalized greeting for a given name', () => {
  assert.strictEqual(greet('Jack'), 'Hello, Jack!');
});

test('greet returns a default greeting for an empty name', () => {
  assert.strictEqual(greet(''), 'Hello, there!');
});

test('greet returns a default greeting for a whitespace-only name', () => {
  assert.strictEqual(greet('   '), 'Hello, there!');
});

test('greet returns a default greeting for a missing name', () => {
  assert.strictEqual(greet(), 'Hello, there!');
});
