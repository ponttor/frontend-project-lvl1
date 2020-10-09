/* eslint-disable no-restricted-syntax */

import readlineSync from 'readline-sync';

export const roundsCount = 3;

export const run = (description, results) => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}`);

  console.log(description);

  for (const result of results) {
    const [answers, correctAnswer] = result;
    const question = answers.join(' ');
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
