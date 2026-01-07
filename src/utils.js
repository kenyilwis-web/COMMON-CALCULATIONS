/**
 * Calculate a 10% tax on a monetary amount.
 * @param {number} amount
 * @returns {number}
 */
function calculateTax(amount) {
  if (typeof amount !== 'number' || Number.isNaN(amount)) {
    throw new TypeError('amount must be a number');
  }
  return amount * 0.10;
}

/**
 * Convert a value to an uppercase string.
 * @param {string} text
 * @returns {string}
 */
function convertToUpperCase(text) {
  if (text === null || text === undefined) return '';
  return String(text).toUpperCase();
}

/**
 * Return the larger of two numbers.
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function findMaximum(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new TypeError('num1 and num2 must be numbers');
  }
  return num1 > num2 ? num1 : num2;
}

/**
 * Check whether a word is a palindrome (ignoring case and non-alphanumeric chars).
 * @param {string} word
 * @returns {boolean}
 */
function isPalindrome(word) {
  if (typeof word !== 'string') {
    word = String(word);
  }
  const normalized = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

/**
 * Calculate price after applying a percentage discount.
 * @param {number} originalPrice
 * @param {number} discountPercentage
 * @returns {number}
 */
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  if (typeof originalPrice !== 'number' || typeof discountPercentage !== 'number') {
    throw new TypeError('originalPrice and discountPercentage must be numbers');
  }
  return originalPrice * (1 - discountPercentage / 100);
}

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};
