import { roundsCount, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const min = -10;
const max = 30;
const listOfOperators = '*+-';

const description = 'What is the result of the expression?';

const getRandomOperator = (operators) => {
  const operatorIndex = generateRandomNumber(0, operators.length - 1);
  return operators[operatorIndex];
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
  const question = [randomNumber1, randomOperator, randomNumber2].join(' ');
  return [question, correctAnswer];
};

export default () => {
  const results = [];
  for (let i = 0; i < roundsCount; i += 1) {
    results.push(generateRound());
  }
  run(description, results);
};
