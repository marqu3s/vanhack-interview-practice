"use strict";
var http = require('http');
var url = require('url');
var fs = require('fs');
var io = require('socket.io');
// import * as mongoose from 'mongoose';
var port = 8080;
// const mongodbUrl = 'mongodb://localhost:27017/vip';
// mongoose.connect(mongodbUrl);
// Functions
var sendFile = function (path, response) {
    if (path === '/')
        path = '/index.html';
    if (path == '/getMembers') {
    }
    else {
        path = '/../client' + path;
    }
    fs.readFile(__dirname + path, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write("opps this doesn't exist - 404");
            response.end();
        }
        else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data, "utf8");
            response.end();
        }
    });
};
// Create and start the webserver
var httpServer = http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;
    sendFile(path, response);
});
httpServer.listen(port);
console.log('Running on http://localhost:' + port);
var socketServer = io(httpServer);
// Socket events
socketServer.on('connection', function (socket) {
    console.log('Socket connected');
    socket.emit('msg', { action: 'info', data: 'You are connected. (ID: ' + socket.id + ')' });
    // socket.on('')
});
//# sourceMappingURL=socket-server.js.map