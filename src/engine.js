/* eslint-disable no-restricted-syntax */

import readlineSync from 'readline-sync';

export const defineIterationNumber = () => 3;

export const run = (description, results) => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}`);

  console.log(description);

  for (const result of results) {
    console.log(result[0]);
    const currentAnswer = readlineSync.question('Your answer: ');
    if (result[1] === currentAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${currentAnswer}" is wrong answer ;(. Correct answer was "${result[1]}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
