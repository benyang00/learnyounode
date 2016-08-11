var fs = require('fs');

var bufferObj = fs.readFileSync(process.argv[2]);

var str = bufferObj.toString().split('\n');

console.log(str.length - 1);
