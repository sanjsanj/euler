/**
 * The sum of the squares of the first ten natural numbers is,
 * 1² + 2² + ... + 10² = 385
 * The square of the sum of the first ten natural numbers is,
 * (1 + 2 + ... + 10)² = 552 = 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

const difference = num => {
  let sumOfSquares = 0;
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sumOfSquares += i * i;
  }

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  const squareOfSums = sum * sum;

  return squareOfSums - sumOfSquares;
};

console.log(difference(100));
