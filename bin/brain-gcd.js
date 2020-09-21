#!/usr/bin/env node;
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import intro from '../src/games/intro.js';
import gen from '../src/games/gcdGenResult.js';
import receive from '../src/games/receiveAnswer.js';
import engine from '../src/games/engine.js';

const name = intro();

console.log('Find the greatest common divisor of given numbers.');

engine(gen, receive, name);
