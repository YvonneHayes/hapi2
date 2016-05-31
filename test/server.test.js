const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const Books = require('../models/books.js');
const server = require('../lib/server.js');
const mongoose = require('../lib/mongoose.js');

const DB_URI = process.env.DB_URI || 'mongodb://localhost/godzilla';

describe('E2E tests', () => {



});
