/**Name : Fs Module
eventEmitter.on('scream', function() {
 * Description: To handle the file system.  fs module to read the data of a file*/
  const fs = require('fs');

  fs.readFile('os.js', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  
    console.log(data);
  });
  