/**
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 */

const fibonacciEvenSum = limit => {
  const fibArray = [1, 2];

  while (fibArray[fibArray.length - 1] <= limit) {
    fibArray.push(
      fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
    );
  }

  return fibArray.reduce((acc, val) => acc + (val % 2 === 0 ? val : 0), 0);
};

console.log(fibonacciEvenSum(4000000));
