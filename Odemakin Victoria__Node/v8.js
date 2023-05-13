/**Name: v8
 * Description: The v8 module exposes APIs that are specific to the version of V8 built into the Node.js binary.
 */
// Accessing v8 module
const v8 = require('v8');

// Calling v8.getHeapStatistics()
console.log(v8.getHeapStatistics());
