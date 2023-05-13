/**Name : Readline Module
 * Description: allows the reading of input stream line by line. This module wraps up the process standard output and process standard input objects.   */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
})