/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

const largestPalindrome = digits => {
  const max = Math.pow(10, digits) - 1;
  let highest = 0;

  for (let i = 0; i < max; i++) {
    const first = max - i;

    for (let second = max; second >= first; second--) {
      const result = first * second;

      if (highest / first > max) break;

      if (
        result > highest &&
        `${result}` ===
          `${result}`
            .split("")
            .reverse()
            .join("")
      ) {
        highest = result;
      }
    }
  }

  return highest;
};

console.log(largestPalindrome(3));
