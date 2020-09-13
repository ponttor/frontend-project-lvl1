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
console.log('What number is missing in the progression?');

// providing number
const length = 10; // length of the array
const min = 1; // manimum value
const max = 100; // maximum value
const max0 = 10; // maximum for array[0]
const currentNumber = []; // result
const solution = []; // solution

const getNumber = () => {
  const missingPosition = Math.floor(Math.random() * (length - 1)) + 1; // 0 missing number
  const stepValue = Math.floor(Math.random() * (max0 - min)) + min; // step value
  currentNumber[0] = Math.floor(Math.random() * (max - min)) + min; // first value
  for (let i = 1; i <= length - 1; i += 1) {
    currentNumber[i] = stepValue + currentNumber[i - 1]; // creating array
  }
  solution[0] = currentNumber[missingPosition];
  currentNumber[missingPosition] = '..';
  console.log(`Question: ${currentNumber.toString()}`);
  return solution[0];
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
if (currentAnswer[0] === solution[0]) {
  console.log('Correct!');
  getNumber();
  getAnswer();
  if (currentAnswer[0] === solution[0]) {
    console.log('Correct!');
    getNumber();
    getAnswer();
    if (currentAnswer[0] === solution[0]) {
      console.log('Correct!');
      console.log(`Congratulations, ${userName[0]}!`);
    } else {
      console.log(`"${currentAnswer[0]}" is wrong answer ;(. Correct answer was "${currentNumber[0]}"`);
    }
  } else {
    console.log(`"${currentAnswer[0]}" is wrong answer ;(. Correct answer was "${currentNumber[0]}"`);
  }
} else {
  console.log(`"${currentAnswer[0]}" is wrong answer ;(. Correct answer was "${currentNumber[0]}"`);
}
