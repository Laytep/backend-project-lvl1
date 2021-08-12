#!/usr/bin/env node
import { nameQestion, game4 } from '../src/game.js';

const name = nameQestion;
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
game4();
