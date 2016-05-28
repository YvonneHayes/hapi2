const Hapi = require('hapi');

//creating the Hapi server

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080
});

//Creating the routes

server.route({
  method: 'GET',
  path:'/',
  handler: function(request, response) {
    return response('hello world Kobi rulz');
  }
});

module.exports = server;
