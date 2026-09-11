import test from 'node:test';
import assert from 'node:assert';
import { truncate } from './truncate.mjs';

test('shortens text and ends with a single ellipsis, exactly max characters', () => {
  const result = truncate('hello world', 8);
  assert.strictEqual(result, 'hello w…');
  assert.strictEqual(Array.from(result).length, 8);
});

test('returns text unchanged when already at max length', () => {
  assert.strictEqual(truncate('hello', 5), 'hello');
});

test('returns text unchanged when under max length, no ellipsis appended', () => {
  assert.strictEqual(truncate('hi', 10), 'hi');
});

test('max of 0 returns empty string', () => {
  assert.strictEqual(truncate('hello world', 0), '');
});

test('negative max returns empty string', () => {
  assert.strictEqual(truncate('hello world', -5), '');
});

test('missing text returns empty string', () => {
  assert.strictEqual(truncate(undefined, 5), '');
  assert.strictEqual(truncate(null, 5), '');
});

test('empty text returns empty string', () => {
  assert.strictEqual(truncate('', 5), '');
});

test('never splits a surrogate pair when truncating emoji', () => {
  const result = truncate('a😀😀', 2);
  assert.strictEqual(Array.from(result).length, 2);
  // must not contain a lone unpaired surrogate half
  for (const ch of result) {
    assert.strictEqual(Array.from(ch).length, 1);
  }
  assert.strictEqual(result, 'a…');
});

test('result is never longer than max, including the ellipsis', () => {
  const result = truncate('a much longer piece of text than the max', 12);
  assert.strictEqual(Array.from(result).length, 12);
  assert.ok(result.endsWith('…'));
});
