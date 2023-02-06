#!/usr/bin/env node
import chalk from 'chalk';
import { cliWelcome } from './utils/cliWelcome.js';

// Display a header
cliWelcome();

// Display the user bio in the conosle
console.log(`
${chalk.bgBlue.bold(' Piotr Szponder ')}

${chalk.dim(`
Fullstack Software Developer

Hi, I'm Piotr Szponder, it's great to meet you!
Thanks for checking out out my CLI app!`)}

${chalk.hex('6cc644').bold.inverse(' GitHub ')}   ${chalk.dim(
  'https://github.com/pszponder'
)}
${chalk.hex('0077b5').bold.inverse(' LinkedIn ')} ${chalk.dim(
  'https://www.linkedin.com/in/piotrszponder/'
)}
`);
