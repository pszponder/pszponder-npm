/**
 * Cross platform clear console
 * Platform: macOS, Linux, and Windows
 * Source -- https://www.npmjs.com/package/clear-any-console
 */
export const clearConsole = () =>
  process.stdout.write(
    process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'
  );
