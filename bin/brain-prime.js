#!/usr/bin/env node;
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import intro from '../src/games/intro.js';
import gen from '../src/games/primeGenResult.js';
import receive from '../src/games/receiveAnswer.js';
import engine from '../src/games/engine.js';

const name = intro();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

engine(gen, receive, name);
