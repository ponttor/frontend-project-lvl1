#!/usr/bin/env node

import engine from './engine.js';

const question = 'What is the result of the expression?';
export default () => {
  engine(question);
};
