var net = require('net');


function getDate() {
	date = new Date();
	Y = zeroFill(date.getFullYear());
	M = zeroFill(date.getMonth() + 1);
	D = zeroFill(date.getDate());
	H = zeroFill(date.getHours());
	m = zeroFill(date.getMinutes());
	return (Y + '-' + M + '-' + D + ' ' + H + ':' + m);
}

function zeroFill(number) {
    return (number < 10 ? '0'+number : number)
}

var server = net.createServer(function(socket) {
	socket.write(getDate() + '\n');
	socket.end();
});
server.listen(process.argv[2])

/* Official Solution */

// ────────────────────────────────────────────────────────────────────────────────
// var net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))
