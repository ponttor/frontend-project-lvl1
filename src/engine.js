/* eslint-disable no-restricted-syntax */

import readlineSync from 'readline-sync';

const magicNumber = 3;
export const defineIterationNumber = () => magicNumber;

export const run = (description, results) => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}`);

  console.log(description);

  let currentAnswer = '';
  let iterationCounter = 0;
  for (const result of results) {
    iterationCounter += 1;
    console.log(result[0]);
    currentAnswer = readlineSync.question('Your answer: ');
    if (result[1] === currentAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${currentAnswer}" is wrong answer ;(. Correct answer was "${result[1]}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (iterationCounter === results.length) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
