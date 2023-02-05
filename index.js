#!/usr/bin/env node

/**
 * Cross platform clear console
 * Platform: macOS, Linux, and Windows
 * Source -- https://www.npmjs.com/package/clear-any-console
 */
const clearConsole = () =>
  process.stdout.write(
    process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'
  );

// Clear the console
clearConsole();

// Display the user bio in the conosle
console.log(`
Piotr Szponder
Fullstack Software Developer

Hi, I'm Piotr Szponder, it's great to meet you!
Thanks for checking out out my CLI app!

GitHub: https://github.com/pszponder
`);
