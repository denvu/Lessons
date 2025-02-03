'use strict';

const numbers = [];

const calculate = (arr) => {
  const sum = arr.reduce((sum, num) => sum + num, 0);

  if (sum < 50) {
    const rnd = Math.round(Math.random() * 10);
    arr.push(rnd);
    calculate(arr);
  } else {
    console.log(sum);
    console.log(arr);
  }
};

calculate(numbers);
