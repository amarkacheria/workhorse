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
