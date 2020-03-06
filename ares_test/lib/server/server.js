/*
#========================================================================================================================================== #
................................................................ARES TEST......................................................................
#========================================================================================================================================== #
*/


//Create a nodejs websocket server which receives JSON messages from drones
//Console log the message received and send a callback message in JSON format

const server = {
	server_test_version: "1",
	ws: require('ws'),
	port: 8081
};

var websocketServer = new server.ws.Server({port: server.port});

var time = function() {
	// returning milliseconds to easily guage the sequence of events for one connection
	// can be changed to date-time for better logging for multiple connections
	return new Date().getMilliseconds();
};

console.log('Websocket started on ' + server.port + ' : ' + time());

websocketServer.on('connection', function(ws) {
    ws.on('message', function(message) {
		console.log('Message from drone : ' + message + ' : ' + time());
		ws.send('Server acknowledgment', function(error) {
			if (error) {
				console.log('Error sending acknowledgment to drone: ' + time());
			} else {
				console.log('Successfully sent acknowledgment to drone: ' + time());
			}
		});
    });
});