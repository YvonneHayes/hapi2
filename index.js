const server = require('./lib/server.js');
const DB_URI = process.env.DB_URI || 'mongodb://localhost/books';
const database = require('./lib/database');

// starting the server
server.start(err => {
  if(err) console.log('ERROR at server start:', err);
  else {
    database.connect(DB_URI);
    console.log('Server running at:', server.info.uri);
  }
});
