/// <reference path="../typings/index.d.ts" />
/**
 * Tutorials used:
 * http://www.tamas.io/advanced-chat-using-node-js-and-socket-io-episode-1/
 * http://danielnill.com/nodejs-tutorial-with-socketio/
 */
// Functions
var sendFile = function (path, response) {
    if (path === '/')
        path = 'index.html';
    if (path == '/getMembers') {
        getConnectedMembers(response);
    }
    else {
        path = '/../web/' + path;
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
    }
};
var getToday = function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);
    var today = year + '-' + month + '-' + day;
    return today;
};
var getConnectedMembers = function (response) {
    var today = getToday();
    var isoDateFrom = today + 'T00:00:00.000Z';
    var isoDateTo = today + 'T23:59:59.999Z';
    ConnectedMember.find({ connected_at: { $gte: isoDateFrom, $lte: isoDateTo } }).lean().exec(function (err, models) {
        return response.end(JSON.stringify(models));
    });
};
var joinMember = function (name, date) {
    var today = date.substring(0, 10);
    var isoDateFrom = today + 'T00:00:00.000Z';
    var isoDateTo = today + 'T23:59:59.999Z';
    ConnectedMember.findOne({ name: name, connected_at: { $gte: isoDateFrom, $lte: isoDateTo } }, function (err, model) {
        if (err) {
            console.log(err);
        }
        else if (model === null) {
            // Define the order of the new client
            ConnectedMember.count(function (err, count) {
                if (err) {
                    console.log(err);
                }
                else {
                    var order = count + 1;
                    var model = new ConnectedMember({ name: name, order: order, connected_at: date });
                    model.save(function () {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log('saved successfully:', model);
                        }
                    });
                }
            });
        }
        else {
            console.log('Found ' + name);
        }
    });
};
// Requires
var port = 8080;
var mongodbUrl = 'mongodb://localhost:27017/vip';
var http = require('http');
var url = require('url');
var fs = require('fs');
var io = require('socket.io');
var mongoose = require('mongoose');
mongoose.connect(mongodbUrl);
// ConnectedMember model
var connectedMemberSchema = mongoose.Schema({
    name: String,
    order: Number,
    connected_at: Date
});
/*connectedMemberSchema.statics.findByName = function(name, cb) {
  return this.find({ name: name }, cb);
};*/
var ConnectedMember = mongoose.model('ConnectedMember', connectedMemberSchema);
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// const uuid = require('node-uuid');
var server = http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;
    sendFile(path, response);
});
server.listen(port);
var socket = io.listen(server);
// Rooms and people
// var Room = require('./room.js');
// var people = {};
// let rooms = {};
var clients = [];
socket.on('connection', function (client) {
    console.log('A user connected.');
    client.emit('msg', { action: 'info', data: 'You are connected. (ID: ' + client.id + ')' });
    client.on('join', function (data) {
        clients[client.id] = { 'name': data.name }; // maps a socket id to a user.
        joinMember(data.name, data.date);
        // Message just the connected user.
        client.emit('msg', { action: 'showRoom', data: true });
        // Message all the other users.
        client.broadcast.emit('msg', { action: 'info', data: data.name + ' has connected.' });
        // MongoClient.connect(mongodbUrl, function(err, db) {
        // assert.equal(null, err);
        // console.log("Connected correctly to mongodb server.");
        // joinMember(db, data.name, function() {
        // db.close();
        // });
        // });
        // var roomID = null;
        // people[client.id] = {'name': data.name, "username": data.username, "room": roomID};
        // socket.sockets.emit("update", people[client.id].name + " conectou.");
        // clients.push(client);
        // Create a room just for the user connected
        /*if (people[client.id].room === null) {
            roomID = uuid.v4();				// ID of the room.
            var roomName = data.username;	// name of the room, the same as the username.
            var room = new Room(roomName, roomID, client.id);
            
            rooms[roomID] = room;				// keep track of created rooms.
            client.room = roomName;
            client.join(client.room);			// auto-join the creator to the room.
            room.addPerson(client.id);			// also add the person to the room object.
            people[client.id].room = roomID;	// update the room key with the ID of the created room.
        }*/
        // client.emit('msg', '[' + data.name + '] You are connected.');
        // console.log(clients);
        // console.log(people);
    });
    // emit just to the client's socket
    //client.emit('msg', 'You are connected.');
    // emit globally
    //socket.sockets.emit('msg', 'You are connected.');
    // emit to everyone but the client's socket
    //client.broadcast.emit('msg', 'You are connected.');
    // one of the latest updates to socket.io now allows rooms/groups. for a client to join and leave a room
    //client.join('room1');
    //client.leave('room1');
    //to broadcast information to a certain room (excluding the client):
    //client.broadcast.to('room1').emit('function', 'data1', 'data2');
    //to broadcast information globally:
    //io.sockets.in('room1').emit('function', 'data1', 'data2');
    client.on('message-from-php', function (data) {
        data = JSON.parse(data);
        console.log('');
        console.log('');
        console.log(data);
        for (var _i = 0, clients_1 = clients; _i < clients_1.length; _i++) {
            var entry = clients_1[_i];
            console.log(entry);
        }
        for (var entry in clients) {
            console.log(entry);
        }
        // client.broadcast.emit('msg', data);
    });
    client.on('disconnect', function () {
        console.log('A user disconnected.');
        // delete people[client.id];
        delete clients[client.id];
    });
});
console.log('Running on http://localhost:' + port);
//# sourceMappingURL=server.js.map