const assert = require('assert');
const {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
} = require('../src/utils');

// calculateTax
assert.strictEqual(calculateTax(100), 10);
assert.strictEqual(calculateTax(0), 0);
assert.throws(() => calculateTax('a'), TypeError);

// convertToUpperCase
assert.strictEqual(convertToUpperCase('hello'), 'HELLO');
assert.strictEqual(convertToUpperCase(''), '');
assert.strictEqual(convertToUpperCase(null), '');

// findMaximum
assert.strictEqual(findMaximum(5, 9), 9);
assert.strictEqual(findMaximum(-1, -2), -1);
assert.throws(() => findMaximum('5', 5), TypeError);

// isPalindrome
assert.strictEqual(isPalindrome('racecar'), true);
assert.strictEqual(isPalindrome('Race car'), true);
assert.strictEqual(isPalindrome('hello'), false);

// calculateDiscountedPrice
assert.strictEqual(calculateDiscountedPrice(100, 20), 80);
assert.strictEqual(calculateDiscountedPrice(50, 0), 50);
assert.throws(() => calculateDiscountedPrice('100', 20), TypeError);

console.log('All tests passed.');
