import { roundsCount, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const min = -10;
const max = 30;
const operators = '*+-';

const description = 'What is the result of the expression?';

const getRandomOperator = (operatorsList) => {
  const operatorIndex = generateRandomNumber(0, operatorsList.length - 1);
  return operatorsList[operatorIndex];
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
  const randomOperator = getRandomOperator(operators);
  const correctAnswer = String(calculate(randomNumber1, randomNumber2, randomOperator));
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  return [question, correctAnswer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  run(description, rounds);
};
