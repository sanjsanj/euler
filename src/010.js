/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
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

const sumOfPrimes = num => {
  const primesArray = [2];
  let currentNum = 3;

  while (currentNum < num) {
    if (_isPrime(currentNum, primesArray)) {
      primesArray.push(currentNum);
    }
    currentNum++;
  }

  return primesArray.reduce((acc, val) => acc + val, 0);
};

console.log(sumOfPrimes(2000000));
