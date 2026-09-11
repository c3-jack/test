import { test } from 'node:test';
import assert from 'node:assert';
import { slugify } from './slugify.mjs';

test('converts a simple string to a slug', () => {
  assert.strictEqual(slugify('Hello World'), 'hello-world');
});

test('drops punctuation and symbols instead of replacing with dashes', () => {
  assert.strictEqual(slugify('C3 AI: Rocks!'), 'c3-ai-rocks');
});

test('collapses runs of whitespace to a single dash and trims leading/trailing dashes', () => {
  assert.strictEqual(slugify('  multiple   spaces   here  '), 'multiple-spaces-here');
});

test('normalizes accented characters to ascii', () => {
  assert.strictEqual(slugify('Café'), 'cafe');
});

test('returns empty string for empty input', () => {
  assert.strictEqual(slugify(''), '');
});

test('returns empty string for whitespace-only input', () => {
  assert.strictEqual(slugify('   '), '');
});

test('returns empty string for missing input', () => {
  assert.strictEqual(slugify(undefined), '');
  assert.strictEqual(slugify(null), '');
});
