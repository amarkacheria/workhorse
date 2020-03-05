var ws_socket = function(drone)
	{

			//New WS connection............................
			drone.ws_client.connection = new drone.ws(drone.ws_client.ws_url);
	};


module.exports = ws_socket;