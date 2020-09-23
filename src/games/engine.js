/* eslint-disable no-console */
/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';

const userName = [];
const intro = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  userName[0] = name;
  console.log(`Hello, ${name}`);
  return userName[0];
};

const comparison = (a, b) => {
  if (a === b) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${b}" is wrong answer ;(. Correct answer was "${a}"`);
  return false;
};

const min = 1;
const max = 100;

const gen = () => {
  const randomNumber1 = Math.floor(Math.random() * (max - min)) + min;
  const randomNumber2 = Math.floor(Math.random() * (max - min)) + min;
  const symbols = ['*', '+', '-'];
  const randomNumber3 = Math.floor(Math.random() * symbols.length);
  const randomSymbol = symbols[randomNumber3];
  console.log(`Question: ${randomNumber1} ${randomSymbol} ${randomNumber2}`);
  if (randomNumber3 === 0) {
    const result = randomNumber1 * randomNumber2;
    return String(result);
  } if (randomNumber3 === 1) {
    const result = randomNumber1 + randomNumber2;
    return String(result);
  }
  const result = randomNumber1 - randomNumber2;
  return String(result);
};

const receive = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export default (text) => {
  const name = intro();

  console.log(text);

  if (comparison(gen(), receive())) {
    if (comparison(gen(), receive())) {
      if (comparison(gen(), receive())) {
        console.log(`Congratulations, ${name}!`);
      } else {
        console.log(`Let's try again, ${name}!`);
      }
    } else {
      console.log(`Let's try again, ${name}!`);
    }
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
