import run from './engine.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const program = 'brain-prime';
export default () => {
  run(program, question);
};
