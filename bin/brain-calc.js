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
console.log('What is the result of the expression?');

// providing number
const min = 1; // manimum value
const max = 100; // maximum value
const currentNumber = []; // result

const getNumber = () => {
  const randomNumber1 = Math.floor(Math.random() * (max - min)) + min; // first number
  const randomNumber2 = Math.floor(Math.random() * (max - min)) + min; // second number
  const symbols = ['*', '+', '-'];
  const randomNumber3 = Math.floor(Math.random() * symbols.length); // operator number
  const randomSymbol = symbols[randomNumber3];
  console.log(`Question: ${randomNumber1} ${randomSymbol} ${randomNumber2}`);
  if (randomNumber3 === 0) {
    currentNumber[0] = randomNumber1 * randomNumber2;
    return currentNumber;
  } if (randomNumber3 === 1) {
    currentNumber[0] = randomNumber1 + randomNumber2;
    return currentNumber;
  } if (randomNumber3 === 2) {
    currentNumber[0] = randomNumber1 - randomNumber2;
    return currentNumber[0];
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
    }
  } else {
    console.log(`"${currentAnswer[0]}" is wrong answer ;(. Correct answer was "${currentNumber[0]}"`);
  }
} else {
  console.log(`"${currentAnswer[0]}" is wrong answer ;(. Correct answer was "${currentNumber[0]}"`);
}
