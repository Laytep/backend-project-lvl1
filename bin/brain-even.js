#!/usr/bin/env node.
import { nameQestion, game1 } from '../src/game.js';

const name = nameQestion;
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
game1();
