import pkgJSON from '../package.json' assert { type: 'json' };
import { clearConsole } from './clearConsole.js';

export const cliWelcome = () => {
  // Clear the console
  clearConsole();

  // Add the header
  const header = `
${pkgJSON.name}  v${pkgJSON.version}
${pkgJSON.description}
`;
  console.log(header);
};
