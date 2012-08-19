TODO
I think I need to use a MySQL adapter that pools connections.  Cause as it stands now, I think that simultaneous HTTP requests will all depend on MySQL to sequentially handle each request.  All those HTTP requests will get handled by a single Node.js thread.  Which has a single MySQL connection that serves requests sequentially.

TODO
Maybe I code it first w/o and then see if there are performance gains in switching to pooling.

TODO
If I stick with the existing library, I need to reconnect the DB if the connection disconnects.  Because each request doesn't auto-connect to the DB.