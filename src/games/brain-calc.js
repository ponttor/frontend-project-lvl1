import run from './engine.js';

const question = 'What is the result of the expression?';
const program = 'brain-calc';
export default () => {
  run(program, question);
};
