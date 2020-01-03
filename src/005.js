/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

const maxDivisible = num => {
  let answer = num;
  let definitelyWorks = false;

  while (!definitelyWorks) {
    let mightWork = true;

    for (let start = 2; start <= num; start++) {
      if (!Number.isInteger(answer / start)) {
        mightWork = false;
        answer++;
      }
    }

    if (mightWork) definitelyWorks = true;
  }

  return answer;
};

console.log(maxDivisible(20));
