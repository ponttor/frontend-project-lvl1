/* eslint-disable no-restricted-syntax */

import readlineSync from 'readline-sync';

export const roundsCount = 3;

const getDescription = (gameNumber) => {
  switch (gameNumber) {
    case 1:
      return 'What is the result of the expression?';
    case 2:
      return 'Answer "yes" if the number is even, otherwise answer "no".';
    case 3:
      return 'Find the greatest common divisor of given numbers.';
    case 4:
      return 'Answer "yes" if given number is prime. Otherwise answer "no".';
    case 5:
      return 'What number is missing in the progression?';
    default:
      throw new Error(`Unknown nuber of game: '${gameNumber}'!`);
  }
};

export const run = (gameType, results) => {
  const description = getDescription(gameType);
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}`);

  console.log(description);

  for (const result of results) {
    const [question, correctAnswer] = result;
    console.log(question);
    const currentAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === currentAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${currentAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
