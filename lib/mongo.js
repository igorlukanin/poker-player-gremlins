const MongoClient = require('mongodb').MongoClient;

const mongoURI = 'mongodb://admin:passwordpassword@ds021689.mlab.com:21689/tadada';

module.exports = MongoClient.connect(mongoURI);
