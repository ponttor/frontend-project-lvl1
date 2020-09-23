#!/usr/bin/env node

import engine from './engine.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => {
  engine(question);
};
