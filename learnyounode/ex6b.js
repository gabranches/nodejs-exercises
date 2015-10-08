var ex6a = require('./ex6a');

var dir = process.argv[2];
var filter = process.argv[3];

ex6a(dir, filter, listItems);

function listItems(err, list){
	list.forEach(function (item) {
		console.log(item);
	});
}
