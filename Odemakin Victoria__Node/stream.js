/**Name : Steam Module
 * Description: Node.js streams are a type of data-handling method and are used to read or write input into output sequentially. Streams are used to handle reading/writing  */
const stream = require('stream');
    
const writable = new stream.Writable({
      write: function(chunk, encoding, next) {
    
    console.log(chunk.toString());
    next();
  }
});
    
writable.write("GfG", "utf8", () => {
     console.log("CS-Portal!");
});
