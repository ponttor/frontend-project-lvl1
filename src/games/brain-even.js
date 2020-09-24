import run from './engine.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';
const program = 'brain-even';
export default () => {
  run(program, question);
};
