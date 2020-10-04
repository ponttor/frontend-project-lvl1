import { raundsCount, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const description = 'What is the result of the expression?';

const min = 1;
const max = 100;
const listOfOperators = '*+-';

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
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const randomNumber1 = generateRandomNumber(min, max);
  const randomNumber2 = generateRandomNumber(min, max);
  const randomOperator = getRandomOperator(listOfOperators);
  const correctAnswer = String(calculate(randomNumber1, randomNumber2, randomOperator));
  const question = `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`;
  return [question, correctAnswer];
};

export default () => {
  const results = [];
  for (let i = 0; i < raundsCount; i += 1) {
    results.push(generateRound());
  }
  run(description, results);
};
