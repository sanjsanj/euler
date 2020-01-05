/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10,001st prime number?
 */

const _isPrime = (num, primesArray) => {
  let isPrime = true;

  for (let prime of primesArray) {
    if (prime > Math.sqrt(num)) break;

    if (num % prime === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
};

const generatePrime = num => {
  const primesArray = [];
  let currentNum = 2;

  while (primesArray.length <= num) {
    if (_isPrime(currentNum, primesArray)) {
      primesArray.push(currentNum);
    }

    currentNum++;
  }

  return primesArray[num - 1];
};

console.log(generatePrime(10001));
