/// <reference path="../typings/index.d.ts" />

/**
 * Tutorials used:
 * http://www.tamas.io/advanced-chat-using-node-js-and-socket-io-episode-1/
 * http://danielnill.com/nodejs-tutorial-with-socketio/
 */

// Functions
var sendFile = function (path, response) {
	if (path === '/') path = 'index.html';
	if (path == '/getMembers') {
		ConnectedMember.find().lean().exec(function(err, models) {
    		return response.end(JSON.stringify(models));
		});
	} else {
		path = '/../web/' + path;
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
	}
};

var joinMember = function (name) {
	ConnectedMember.findOne({name: name}, function (err, model) {
		if (err) {
			console.log(err);
		} else if (model === null) {
			// Define the order of the new client
			ConnectedMember.count(function(err, count) {
				if (err) {
					console.log(err);
				} else {
					var order = count + 1;
					var model = new ConnectedMember({name: name, order: order, connected_at: new Date()});
					model.save(function () {
						if (err) {
							console.log(err);
						} else {
							console.log('saved successfully:', model);
						}
					});
				}
			});
		} else {
			console.log('Found ' + name);
		}
	});
}

// Requires
const port = 8080;
const mongodbUrl = 'mongodb://localhost:27017/vip';
const http = require('http');
const url = require('url');
const fs = require('fs');
const io = require('socket.io');
const mongoose = require('mongoose');
mongoose.connect(mongodbUrl);


// ConnectedMember model
const connectedMemberSchema = mongoose.Schema({
	name: String,
	order: Number,
	connected_at: Date
});
/*connectedMemberSchema.statics.findByName = function(name, cb) {
  return this.find({ name: name }, cb);
};*/
const ConnectedMember = mongoose.model('ConnectedMember', connectedMemberSchema);


// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// const uuid = require('node-uuid');


const server = http.createServer(function (request, response) {
	var path = url.parse(request.url).pathname;
	sendFile(path, response);
});

server.listen(port);
const socket = io.listen(server);

// Rooms and people
// var Room = require('./room.js');
// var people = {};
// let rooms = {};
let clients = [];

socket.on('connection', function (client) {
	console.log('A user connected.');
	client.emit('msg', {action: 'info', data: 'You are connected. (ID: ' + client.id + ')'});

	client.on('join', function (data) {
        clients[client.id] = {'name': data.name}; // maps a socket id to a user.
		joinMember(data.name);
		socket.emit('msg', {action: 'showRoom', data: true});

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

	client.on('message-from-php', function(data) {
		data = JSON.parse(data);
		console.log('');
        console.log('');
        console.log(data);

        for (let entry of clients) {
            console.log(entry);
        }

        for (let entry in clients) {
            console.log(entry);
        }
		// client.broadcast.emit('msg', data);
	});

	client.on('disconnect', function(){
    	console.log('A user disconnected.');
    	// delete people[client.id];
        delete clients[client.id];
  	});
});

console.log('Running on http://localhost:' + port);