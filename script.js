'use strict';

(() => {
  const figures = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    const playGame = () => {
      /* выбор компьютера*/
      const computerChoice = figures[getRandomIntInclusive() - 1][0];
      /* выбор игрока*/
      const playerChoice = prompt('Выбери: камень, ножницы или бумага?');

      if (playerChoice === null) {
        alert('Игра завершена.');
        // eslint-disable-next-line max-len
        alert(`Результаты игры: Вы - ${result.player}, компьютер - ${result.computer}.`);
        return;
      }

      const playerFirstLetter = playerChoice[0];

      if (playerFirstLetter === computerChoice) {
        alert('Ничья!');
      } else if (
        (computerChoice === 'к' && playerFirstLetter === 'н') ||
        (computerChoice === 'н' && playerFirstLetter === 'б') ||
        (computerChoice === 'б' && playerFirstLetter === 'к')
      ) {
        result.computer++;
        alert('Вы проиграли!');
      } else {
        result.player++;
        alert('Вы выиграли!');
      }

      console.log(`${computerChoice} || ${playerFirstLetter}`);

      const playAgain = confirm('Хотите сыграть еще раз?');
      if (playAgain) {
        playGame();
      } else {
        const decision = confirm('Вы уверены?');
        if (decision) {
          alert('Спасибо за игру!');
          alert(
              // eslint-disable-next-line max-len
              `Результаты игры: Вы - ${result.player}, компьютер - ${result.computer}.`,
          );
        } else {
          playGame();
        }
      }
    };
    playGame();
  };

  window.RPS = game;
})();
