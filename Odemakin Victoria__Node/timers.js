/**Name : Timer Module
 * Description: To execute a function after a given number of milliseconds  */
const durationInSeconds = 10;

console.log(`Starting timer for ${durationInSeconds} seconds...`);

setTimeout(() => {
  console.log(`Time's up!`);
}, durationInSeconds * 1000)
