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
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

// providing number
const currentNumber = [];
const min = 1; // manimum value
const max = 100000; // maximum value
const primestatus = []; // prime or not

const primeCheck = (givenNumber) => {
  for (let i = 2; i <= givenNumber / 2; i += 1) {
    if (givenNumber % i === 0) {
      return false;
    }
  }
  return true;
}

const getNumber = () => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  console.log(`Question: ${randomNumber}`);
  if (primeCheck(randomNumber) === true) {
    currentNumber[0] = 'yes';
  } else {
    currentNumber[0] = 'no'; // odd
  }
  return currentNumber[0];
};

// receiving answer
const currentAnswer = [];
const getAnswer = () => {
  const receivedAnswer = readlineSync.question('Your answer: ');
  currentAnswer[0] = receivedAnswer;

  return currentAnswer[0];
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
