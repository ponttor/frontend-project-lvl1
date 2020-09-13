#!/usr/bin/env node

// import intro from '/Users/jugofwater/hexlet01/frontend-project-lvl1/src/cli.js';
import readlineSync from 'readline-sync';

// greeting
console.log('Welcome to the Brain Games!');

// requesting name and name greeting
const userName = [];
const intro = () => {
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  userName[0] = name;
  console.log(`Hello, ${name}`);
};
intro();

// game description
console.log('Find the greatest common divisor of given numbers.');

// providing number
const min = 1; // manimum value
const max = 100; // maximum value
const currentNumber = []; // result
let minNumber = 0; // lower number

const getNumber = () => {
  const randomNumber1 = Math.floor(Math.random() * (max - min)) + min; // first number
  const randomNumber2 = Math.floor(Math.random() * (max - min)) + min; // second number
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  if (randomNumber1 > randomNumber2) {
    minNumber = randomNumber2;
  } else {
    minNumber = randomNumber1;
  }
  for (let i = minNumber; i > 0; i -= 1) {
    if ((randomNumber1 % i === 0) && (randomNumber2 % i === 0)) {
      currentNumber[0] = i;
      return currentNumber[0];
    }
  }
};

// receiving answer
const currentAnswer = [];
const getAnswer = () => {
  const receivedAnswer = readlineSync.question('Your answer: ');
  currentAnswer[0] = Number(receivedAnswer);

  return currentAnswer;
};

getNumber();
getAnswer();

// conditions
if (currentAnswer[0] === currentNumber[0]) {
  console.log('Correct!');
  getNumber();
  getAnswer();
  if (currentAnswer[0] === currentNumber[0]) {
    console.log('Correct!');
    getNumber();
    getAnswer();
    if (currentAnswer[0] === currentNumber[0]) {
      console.log('Correct!');
      console.log(`Congratulations, ${userName[0]}!`);
    } else {
      console.log(`"${currentAnswer[0]}" is wrong answer ;(. Correct answer was "${currentNumber[0]}"`);
      console.log(`Let's try again, ${userName[0]}!`);
    }
  } else {
    console.log(`"${currentAnswer[0]}" is wrong answer ;(. Correct answer was "${currentNumber[0]}"`);
    console.log(`Let's try again, ${userName[0]}!`);
  }
} else {
  console.log(`"${currentAnswer[0]}" is wrong answer ;(. Correct answer was "${currentNumber[0]}"`);
  console.log(`Let's try again, ${userName[0]}!`);
}
