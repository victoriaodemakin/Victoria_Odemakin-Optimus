/**Name : Fs Module
 * Description: To handle the file system.  fs module to read the data of a file
 * Example: 
let fs = require('fs');

fs.readFile('demofile.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
})
  */