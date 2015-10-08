var fs = require('fs');
var path = require('path');

module.exports = function (dir, filter, callback) {
	fs.readdir(dir, function (err, list) {
		if (err) {
			callback(err, null);
		} else {
			files = [];
			list.forEach(function(item){
				if (path.extname(item) == '.' + filter) {
					files.push(item);
				}
			});
			callback(null, files);
		}
	});
}

