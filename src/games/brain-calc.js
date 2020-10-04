import { Raundscount, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const description = 'What is the result of the expression?';

const min = 1;
const max = 100;
const ListOfOperators = '*+-';

const getRandomOperator = (operators) => {
  const randomSymbolNumber = generateRandomNumber(min, operators.length);
  return operators[randomSymbolNumber - 1];
};

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '*':
      return number1 * number2;
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      return console.log(`Unknown operator: '${operator}'!`);
  }
};

const generateOneRound = () => {
  const randomNumber1 = generateRandomNumber(min, max);
  const randomNumber2 = generateRandomNumber(min, max);
  const randomOperator = getRandomOperator(ListOfOperators);
  const correctAnswer = String(calculate(randomNumber1, randomNumber2, randomOperator));
  const question = `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`;
  return [question, correctAnswer];
};

export default () => {
  const results = [];
  for (let i = 0; i < Raundscount; i += 1) {
    results.push(generateOneRound());
  }
  run(description, results);
};
