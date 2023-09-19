/**
 * Using Process stdin
 */

const readline = require('readline');

function runProgram() {
  const interfaceObject = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  interfaceObject.question('Welcome to Holberton School, what is your name?\n', (INPUT) => {
    console.log(`Your name is: ${INPUT}`);

    interfaceObject.close();

    // Add this line to handle the 'close' event when the program is manually closed
    process.stdin.on('end', () => {
      console.log('This important software is now closing\n');
    });
  });
}

// Call the function to run the program
runProgram();

// Listen for Ctrl+C to gracefully exit the program
process.on('SIGINT', () => {
  console.log('This important software is now closing\n');
  process.exit();
});
