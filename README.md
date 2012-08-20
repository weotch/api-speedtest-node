TODO
I think I need to use a MySQL adapter that pools connections.  Cause as it stands now, I think that simultaneous HTTP requests will all depend on MySQL to sequentially handle each request.  All those HTTP requests will get handled by a single Node.js thread.  Which has a single MySQL connection that serves requests sequentially.

TODO
Maybe I code it first w/o and then see if there are performance gains in switching to pooling.

TODO
If I stick with the existing library, I need to reconnect the DB if the connection disconnects.  Because each request doesn't auto-connect to the DB.

TODO
Connecting to MAMP right now via socket.  Lets switch to homewbrew db and non-socket.

TOOD
Make one of the DB options not reuse the mysql connection but create a new connection for every request.

## Usage

Run locally with `MYSQL_USER=root MYSQL_PASS=root supervisor -n exit app.js`

## Mongo Research

* Does it allow parallel requests over a single connection?
** No it doesn't, it requires connection pooling too.
** Mongoose doesn't do connection pooling.
** Default driver does: http://mongodb.github.com/node-mongodb-native/api-generated/server.html
*** From the docs about hte default: "However, it can be used on its own, but it also serves as the basis of several object mapping libraries, such as Mongoose."
*** This forum says it's possible: "https://groups.google.com/forum/?fromgroups#!topic/mongoose-orm/NHqZOjMg-Ng%5B1-25%5D"

* How secure are it's writes?  What are the risks of losing data?
** If you do a safe mode connection, each write is checked and error thrown if there was a problem.
** It suppports journaling now, which I guess is some sort of backing up of stuff