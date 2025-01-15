"use strict";

const gameNum = () => {
    const rnd = Math.floor(Math.random() * 100) + 1;
    console.log(rnd);

    const askNumber = () => {
        const number = prompt("Введите число от 1 до 100");

        if (number === null) {
          alert("Игра окончена");
           return;
        }

        const num = Number(number);

        if (isNaN(num) || !Number.isInteger(num)) {
          alert("Введи число!");
            return askNumber();
        } else {
            if (num > rnd) {
              alert("Меньше!");
            return askNumber();
            } else if (num < rnd) {
            alert("Больше!");
            return askNumber();
            } else {
            alert("Правильно!");
                return;
            }
        }
      };

    askNumber();
};

gameNum();
