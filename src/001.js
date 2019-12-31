/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

const multiples = value => {
  const multiplesArray = [];

  for (let i = 3; i < value; i ++) {
    if (i % 3 === 0 || i % 5 === 0) multiplesArray.push(i)
  }

  return multiplesArray.reduce((acc, val)=>{
    return acc +val;
  },0)
}

console.log(multiples(1000))
