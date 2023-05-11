/**Name : Util Module
 * Description: The util.types.isExternal() method is an inbuilt application programming interface of the util module which is used to check if the value is a native External value in the node.js
 * Example: 
 * const util = require('util');

const v1 = new Date();
const { JSStream } = process.binding('js_stream');
const external = (new JSStream())._externalStream;

 
console.log(util.types.isExternal(v1));
console.log(util.types.isExternal(external));
console.log(util.types.isExternal(0));
console.log(util.types.isExternal(new String('foo')));

  */