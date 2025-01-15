"use strict";

const arrNumbers = (amount, n, m, parity) => {
  const numbers = [];

  while (amount > numbers.length) {
    const rnd = Math.round(Math.random() * (m - n + 1) + n);

    if (rnd >= n && rnd <= m) {
      if (parity === "even" && rnd % 2 === 0) {
        numbers.push(rnd);
      } else if (parity === "odd" && rnd % 2 !== 0) {
        numbers.push(rnd);
      } else if (parity === undefined) {
        numbers.push(rnd);
      }
    }
  }
  return numbers;
};

console.log(arrNumbers(5, -20, 20, 'even'));
