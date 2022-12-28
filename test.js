import test from 'node:test';
import assert from 'node:assert/strict';

test('synchronous passing test', (t) => {
    assert.strictEqual(1, 1);
});

test('asynchronous failing test', async (t) => {
  assert.strictEqual(1, 1);
});

test('failing test using Promises', (t) => {
  // Promises can be used directly as well.
  return new Promise((resolve, reject) => {
    setImmediate(() => {
      reject(new Error('this will cause the test to fail'));
    });
  });
});
