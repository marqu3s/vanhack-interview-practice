# Vanhack Interview Practice

Web app to organize Vanhack Interview Practice. Vanhackers who wish to talk in an Interview Practice must login into this room.
They will be called in a first in first service base.

## Frontend

The front end is made of html and javascript files. React is used to update the room.

## Backend

The backend runs a node server to control who is in the room and update connected clients.

## Database

A database is used to control the order of the members who would like to talk in the practice.
The database is mongodb. The data path is ./data/db.
To start the server, run:

`mongod --dbpath ./data/db`

### Resources

https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
