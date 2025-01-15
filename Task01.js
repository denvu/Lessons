'use strict';

const arrNumbers = (amount) => {
    const numbers = [];

    while (amount > numbers.length) {
        const rnd = Math.round(Math.random() * 100);
        numbers.push(rnd);
    }

    return numbers;
}

console.log(arrNumbers(5));