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

TODO
Investigate about Monogo:
* Does it allow parallel requests over a single connection?
* How secure are it's writes?  What are the risks of losing data?

## Usage

Run locally with `MYSQL_USER=root MYSQL_PASS=root supervisor -n exit app.js`