/*
#========================================================================================================================================== #
................................................................ARES TEST......................................................................
#========================================================================================================================================== #
*/


//Send the drone gps coordinates to a websocket server located at ws://localhost:8081.
//Console log server response to message.


const drone = {
	drone_test_version: "1",
	ws: require('ws'),
    ws_socket: require('./ws_socket.js'),
	drone_gps: {
		latitude: 39.3151819149,
		longitude: -84.16808592,
		altitude_meters: 30
	},
	ws_client: {
		ws_url: 'ws://localhost:8081',
		connected: false,
        connection: null
	}
};

drone.ws_socket(drone);

var time = function() {
	// returning milliseconds to easily guage the sequence of events for one connection
	// can be changed to date-time for better logging for multiple connections
	return new Date().getMilliseconds();
};

drone.ws_client.connection.on('open', function() {
	console.log('Client connection opened : ' + time());
	drone.ws_client.connection.send(JSON.stringify(drone.drone_gps), function (error) {
		if (error) {
			console.log('Error sending drone gps coordinates : ' + time());
		} else {
			console.log('Successfully sent drone gps coordinates : ' + time());
		}
	});
});

drone.ws_client.connection.on('message', function(message) {
	console.log('Message received from server : ' + time());
	console.log('Server Message: ');
	console.log(JSON.parse(message));
});
