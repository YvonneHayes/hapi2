const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const Books = require('../models/books.js');
const server = require('../lib/server.js');
const mongoose = require('../lib/mongoose.js');

const DB_URI = process.env.DB_URI || 'mongodb://localhost/books';


describe('E2E testing', () => {

  mongoose.connect(DB_URI);

  const testData = {
    title: 'Pride and Prejudice',
    author: 'Jane_Austen',
    done: true,
    rating: 9
  };

  before(done => {
    Books.remove({})
      .then(done());
  });

  it('TestData gets posted to /books', done => {
    const testRequest = {
      method: 'POST',
      url: '/books',
      payload: testData
    };
    server.inject(testRequest, res => {
      assert.equal(res.statusCode, 200);
      done();
    });
  });

  it('GETS all the books in the database', done => {
    const testRequest = {
      method: 'GET',
      url: '/books'
    };
    server.inject(testRequest, res => {
      assert.equal(res.statusCode, 200);
      assert.ok(res.result.length === 1);
      done();
    });
  });

});
