const {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
} = require('../src/utils');

console.log('calculateTax(100) =>', calculateTax(100)); // 10
console.log("convertToUpperCase('hello') =>", convertToUpperCase('hello')); // HELLO
console.log('findMaximum(5, 9) =>', findMaximum(5, 9)); // 9
console.log("isPalindrome('Race car') =>", isPalindrome('Race car')); // true
console.log('calculateDiscountedPrice(100, 20) =>', calculateDiscountedPrice(100, 20)); // 80
