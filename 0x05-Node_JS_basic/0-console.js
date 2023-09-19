/**
 * Executing basic javascript with Node JS
 *
 * a function named 'displayMessage'
 * that prints in STDOUT, the string argument.
 *
 * @param -
 *  'stringArg' - The message to display (String).
 */

const displayMessage = (stringArg) => {
  process.stdout.write(`${stringArg}\n`);
};

// displayMessage("Hello NodeJS!");
module.exports = displayMessage;
