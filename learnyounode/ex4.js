var fs = require('fs');

var filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function (err, data){
		var arr = data.split('\n');
		console.log(arr.length - 1);
});