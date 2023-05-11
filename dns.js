/**Name : dns Module
 * Description: is a node module used to do name resolution facility which is provided by the operating system as well as used to do an actual DNS lookup.
 * Example: 
 * const dns = require('dns');
    const rrtype="A";
        dns.resolve('geeksforgeeks.org', rrtype, (err, records)
            => console.log('records: %j', records));
  */