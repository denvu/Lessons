'use strict';

(() => {
  const getRandomIntInclusive = () => {
    const min = 1;
    const max = 10;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const result = {
      player: 5,
      computer: 5,
    };
    console.log(result);

    const playGame = () => {
      let number;
      if (result.player < result.computer) {
        number = Number(prompt(`Загадайте число от 1 до ${result.player}`));
      } else {
        number = Number(prompt(`Загадайте число от 1 до ${result.computer}`));
      }

      if (isNaN(number) ||
      number < 1 ||
      number > Math.min(result.player, result.computer)) {
        // eslint-disable-next-line max-len
        alert(`Введите число от 1 до ${Math.min(result.player, result.computer)}`);
        return playGame();
      }

      if (result.computer > 0 && result.player > 0) {
        let randomNumber = getRandomIntInclusive();

        if (result.player === 1) {
          randomNumber = 1;
        }

        if (
          (number % 2 === 0 && randomNumber % 2 === 0) ||
          (number % 2 !== 0 && randomNumber % 2 !== 0)
        ) {
          result.player -= number;
          result.computer += number;
        } else {
          result.player += number;
          result.computer -= number;
        }

        console.log(result);

        if (result.computer === 0) {
          alert(`Игра окончена! Вы выиграли!`);
        } else if (result.player === 0) {
          alert(`Игра окончена! Вы проиграли!`);
        } else {
          playGame();
        }
      }
    };

    playGame();
  };

  window.balls = game;
})();
