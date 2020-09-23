#!/usr/bin/env node

import engine from './engine.js';

const question = 'What number is missing in the progression?';
export default () => {
  engine(question);
};
