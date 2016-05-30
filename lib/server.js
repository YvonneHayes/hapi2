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

//GET basic home page at /

server.route({
  method: 'GET',
  path:'/',
  handler: function(request, reply) {
    return reply('Welcome to your book information center. Sit down and relax with all your old and new favorites');
  }
});

//GET all the books at /books

server.route({
  method: 'GET',
  path: '/books',
  handler: (request, reply) => {

    Books.find()
      .then(dataList => {
        reply(dataList);
      })
      .catch(err => {
        reply({error:err});
      });
  }
});

//GET specific books

server.route({
  method: 'GET',
  path: '/books/{id}',
  handler: (request, reply) => {

    Books.findOne({author: request.params.id})
      .then(data => {
        reply(data);
      })
      .catch(err => {
        reply({error: err});
      });
  }
});

//POST new books

server.route({
  method: 'POST',
  path: '/books',
  handler: (request, reply) => {

    new Books(request.readz).save()
      .then(data => {
        reply({posted: data});
      })
      .catch(err => {
        const key = Object.keys(err.errors);
        reply({error: err.errors[key].message});
      });
  }
});

//PUT - update or replace a books

server.route({
  method: 'PUT',
  path: '/books/{id}',
  handler: (request, reply) => {
    Books.findOneAndUpdate({author: request.params.id}, request.readz,
      {new: true, upsert: true, runValidators: true})
        .then(data => {
          reply({updated:data});
        })
        .catch(err => {
          const key = Object.keys(err.errors);
          reply({error: err.errors[key].message});
        });
  }
});

module.exports = server;
