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
console.log('Answer "yes" if the number is even, otherwise answer "no".');

// providing number
const currentNumber = [];
const min = 1; // manimum value
const max = 100000; // maximum value

const getNumber = () => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  console.log(`Question: ${randomNumber}`);
  currentNumber[0] = randomNumber;
  if (randomNumber % 2 === 0) {
    currentNumber[1] = 'yes'; // even
  } else {
    currentNumber[1] = 'no'; // odd
  }
  return currentNumber;
};

// receiving answer
const currentAnswer = [];
const getAnswer = () => {
  const receivedAnswer = readlineSync.question('Your answer: ');
  currentAnswer[0] = receivedAnswer;

  return currentAnswer;
};

getNumber();
getAnswer();

// console.log(currentNumber);
// console.log(currentAnswer[0]);

if (currentAnswer[0] === currentNumber[1]) {
  console.log('Correct!');
  getNumber();
  getAnswer();
  if (currentAnswer[0] === currentNumber[1]) {
    console.log('Correct!');
    getNumber();
    getAnswer();
    if (currentAnswer[0] === currentNumber[1]) {
      console.log('Correct!');
      console.log(`Congratulations, ${userName[0]}!`);
    } else {
      console.log(`"${currentAnswer[0]}" is wrong answer ;(. Correct answer was "${currentNumber[1]}"`);
    }
  } else {
    console.log(`"${currentAnswer[0]}" is wrong answer ;(. Correct answer was "${currentNumber[1]}"`);
  }
} else {
  console.log(`"${currentAnswer[0]}" is wrong answer ;(. Correct answer was "${currentNumber[1]}"`);
}
