// http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio
"use strict";
var http = require('http');
var url = require('url');
var fs = require('fs');
var io = require('socket.io');
var mongoose = require('mongoose');
var PracticeProvider = require('./models/practice');
// Constants
var PORT = 8080;
var MONGODB_URL = 'mongodb://localhost:27017/vip';
// Connect to mongodb database
mongoose.connect(MONGODB_URL);
mongoose.connection.on('error', function () {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});
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
// var getPractice = function () {
//     let today = '2016-08-07';
//     var practice;
//     let query = PracticeProvider.getPracticeByDateCursor(today);
//     query.exec(function (err, doc) {
//         practice = doc;
//     });
//     console.log(practice);
//     return practice;
// }
// Create and start the webserver
var httpServer = http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;
    sendFile(path, response);
});
httpServer.listen(PORT);
console.log('Running on http://localhost:' + PORT);
// Start the socket.io server
var socketServer = io(httpServer);
// Socket events
socketServer.on('connection', function (socket) {
    console.log('Socket connected');
    socket.emit('msg', { action: 'info', data: 'You are connected. (ID: ' + socket.id + ')' });
    // Return available practice if any
    var today = '2016-08-07';
    var query = PracticeProvider.getPracticeByDateQuery(today);
    query.findOne(function (err, doc) {
        if (err)
            console.log(err);
        socket.emit('msg', { action: 'practice', data: doc });
    });
});
//# sourceMappingURL=socket-server.js.map