/**Name : Crypto Module
 * Description:  Crypto module for Node JS helps developers to hash user passwords.*/
const crypto = require('crypto');

const data = 'hello world';
const hash = crypto.createHash('sha256').update(data).digest('hex');

console.log(hash)