/**Name : Zlib String
 * Description: Zlip is a module used in Node.js to compress or decompress a file. Compression means zip the file and decompression means unzip the file. It is a pre-built Node.js module so don’t require to install it as a dependency  */
const zlib = require('zlib');

const inputString = 'Hello, World! This is a test string.';
console.log(`Original string: ${inputString}`);

// Compress the string using Gzip
const compressedBuffer = zlib.gzipSync(inputString);
console.log(`Compressed string: ${compressedBuffer.toString('base64')}`);

// Decompress the string using Gzip
const decompressedString = zlib.gunzipSync(compressedBuffer).toString();
console.log(`Decompressed string: ${decompressedString}`)