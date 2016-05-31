const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const Books = require('../models/books.js');
const server = require('../lib/server.js');
const mongoose = require('../lib/mongoose.js');

const testData = {
  title: 'Pride and Prejudice',
  author: 'Jane_Austen',
  done: true,
  rating: 9
};

describe('E2E testing', () => {
  
});
