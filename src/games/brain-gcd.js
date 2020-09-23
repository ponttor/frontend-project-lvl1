#!/usr/bin/env node

import engine from './engine.js';

const question = 'Find the greatest common divisor of given numbers.';
export default () => {
  engine(question);
};
