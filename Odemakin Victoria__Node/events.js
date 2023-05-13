/**Name : Event Module
 * Description: To handle events*/


let events = require('events');
let eventEmitter = new events.EventEmitter();

eventEmitter.on('scream', function() {
console.log('A scream is detected!');
});
eventEmitter.emit('scream');
