#!/usr/bin/env node

import engine from './engine.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => {
  engine(question);
};
