/* eslint-disable no-console */
/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';

const userName = [];
const welcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  userName[0] = name;
  console.log(`Hello, ${name}`);
  return userName[0];
};

const compare = (a, b) => {
  if (a === b) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${b}" is wrong answer ;(. Correct answer was "${a}"`);
  return false;
};

const min = 1;
const max = 100;

const generateBrainCalcResult = () => {
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

const generateBrainEvenResult = () => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  console.log(`Question: ${randomNumber}`);
  if (randomNumber % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

let minNumber = 0;

const generateBrainGcdResult = () => {
  const randomNumber1 = Math.floor(Math.random() * (max - min)) + min;
  const randomNumber2 = Math.floor(Math.random() * (max - min)) + min;
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  if (randomNumber1 > randomNumber2) {
    minNumber = randomNumber2;
  } else {
    minNumber = randomNumber1;
  }
  for (let i = minNumber; i > 0; i -= 1) {
    if ((randomNumber1 % i === 0) && (randomNumber2 % i === 0)) {
      const currentNumber = i;
      return String(currentNumber);
    }
  }
};

const checkPrime = (givenNumber) => {
  for (let i = 2; i <= givenNumber / 2; i += 1) {
    if (givenNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const generateBrainPrimeResult = () => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  console.log(`Question: ${randomNumber}`);
  if (checkPrime(randomNumber) === true) {
    return 'yes';
  }
  return 'no';
};

const length = 10;
const max0 = 10;
const progression = [];

const generateBrainProgressionResult = () => {
  const missingPosition = Math.floor(Math.random() * (length - 1)) + 1;
  const stepValue = Math.floor(Math.random() * (max0 - min)) + min;
  progression[0] = Math.floor(Math.random() * (max - min)) + min;
  for (let i = 1; i <= length - 1; i += 1) {
    progression[i] = stepValue + progression[i - 1];
  }
  const result = progression[missingPosition];
  progression[missingPosition] = '..';
  console.log(`Question: ${progression.toString()}`);
  return String(result);
};

const receiveAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export default (program,question) => {
  const name = welcome();

  console.log(question);

  if (program === 'brain-calc') {
    if (compare(generateBrainCalcResult(), receiveAnswer())) {
      if (compare(generateBrainCalcResult(), receiveAnswer())) {
        if (compare(generateBrainCalcResult(), receiveAnswer())) {
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
  }

  if (program === 'brain-even') {
    if (compare(generateBrainEvenResult(), receiveAnswer())) {
      if (compare(generateBrainEvenResult(), receiveAnswer())) {
        if (compare(generateBrainEvenResult(), receiveAnswer())) {
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
  }

  if (program === 'brain-gcd') {
    if (compare(generateBrainGcdResult(), receiveAnswer())) {
      if (compare(generateBrainGcdResult(), receiveAnswer())) {
        if (compare(generateBrainGcdResult(), receiveAnswer())) {
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
  }

  if (program === 'brain-prime') {
    if (compare(generateBrainPrimeResult(), receiveAnswer())) {
      if (compare(generateBrainPrimeResult(), receiveAnswer())) {
        if (compare(generateBrainPrimeResult(), receiveAnswer())) {
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
  }  

  if (program === 'brain-progression') {
    if (compare(generateBrainProgressionResult(), receiveAnswer())) {
      if (compare(generateBrainProgressionResult(), receiveAnswer())) {
        if (compare(generateBrainProgressionResult(), receiveAnswer())) {
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
  } 
};
