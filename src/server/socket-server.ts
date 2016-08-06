
import * as http from 'http';
import * as url from 'url';
import * as fs from 'fs';
import * as io from 'socket.io';
// import * as mongoose from 'mongoose';

const port = 8080;
// const mongodbUrl = 'mongodb://localhost:27017/vip';

// mongoose.connect(mongodbUrl);





// Functions
var sendFile = function (path: string, response: any) {
	if (path === '/') path = '/index.html';
	if (path == '/getMembers') {
		//getConnectedMembers(response);
	} else {
		path = '/../client' + path;
    }

    fs.readFile(__dirname + path, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write("opps this doesn't exist - 404");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data, "utf8");
            response.end();
        }
    });
	
};

// Create and start the webserver
const httpServer = http.createServer(function (request, response) {
	var path = url.parse(request.url).pathname;
	sendFile(path, response);
});

httpServer.listen(port);
console.log('Running on http://localhost:' + port);

const socketServer = io(httpServer);

// Socket events
socketServer.on('connection', function (socket: SocketIO.Socket): void {
    console.log('Socket connected');
    socket.emit('msg', {action: 'info', data: 'You are connected. (ID: ' + socket.id + ')'});

    // socket.on('')
});