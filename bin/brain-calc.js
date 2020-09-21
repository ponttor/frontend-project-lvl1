#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import intro from '../src/games/intro.js';
import gen from '../src/games/calcGenResult.js';
import receive from '../src/games/receiveAnswer.js';
import engine from '../src/games/engine.js';

const name = intro();

console.log('What is the result of the expression?');

engine(gen, receive, name);
