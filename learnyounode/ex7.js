var http = require('http');

http.get(process.argv[2], function (response) {
	response.setEncoding('utf8');
	response.on('data', function (data) {
		var lines = data.split('\n');
		lines.forEach(function (line) {
			console.log(line);
		});
	});
});


/* Official Solution */

// var http = require('http')

//   http.get(process.argv[2], function (response) {
//     response.setEncoding('utf8')
//     response.on('data', console.log)
//     response.on('error', console.error)
//   })