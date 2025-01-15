'use strict';

const arrNumbers = (amount, n, m) => {
    const numbers = [];

    while (amount > numbers.length) {
        const rnd = Math.round(Math.random() * (m - n + 1) + n);

        if (rnd >= n && rnd <= m) {
            numbers.push(rnd);
        }        
    }

    return numbers;
}

console.log(arrNumbers(5, -20, 20));