var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var filter = process.argv[3];

fs.readdir(dir, function (err, list){
	for (var i in list) {
		if (path.extname(list[i]) == '.' + filter) {
			console.log(list[i]);
		}
	}
});


