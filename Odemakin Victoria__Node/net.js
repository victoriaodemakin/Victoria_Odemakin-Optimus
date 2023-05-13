/**Name : Net Module
 * Description: When working with the HTTPS module in Node.js, it is possible to encounter an error when the internet connection is lost or disrupted while the HTTPS request is being made.   */
const https = require('https');https.get('https://www.example.com', (res) => {
    console.log(res.statusCode);
}).on('error', (err) => {
    console.error(err);
})
