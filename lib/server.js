const Hapi = require('hapi');
// const bodyParser = require('body-parser').json();
const Books = require('../models/books.js');


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
  handler: function(request, reply) {
    return reply('Welcome to your book information center. Sit down and relax with all your old and new favorites');
  }
});
//
// server.route({
//   method: 'GET',
//   path: '/author',
//   handler: function(request, response) {
//     const query = request.query.type ? {type: request.query.type} : {};
//     Books.find(query)
//      .select('name author')
//      .populate('name', 'author')
//      .lean()
//      .then( results => response.json(results));
//   }
// });

module.exports = server;
