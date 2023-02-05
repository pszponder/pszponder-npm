#!/usr/bin/env node
import { cliWelcome } from './utils/cliWelcome.js';

// Display a header
cliWelcome();

// Display the user bio in the conosle
console.log(`
Piotr Szponder
Fullstack Software Developer

Hi, I'm Piotr Szponder, it's great to meet you!
Thanks for checking out out my CLI app!

GitHub: https://github.com/pszponder
`);
