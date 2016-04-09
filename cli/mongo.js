const mongo = require('../lib/mongo');

mongo.then(db => {
  const collection = db.collection('state');

  return collection.find({}).toArray().then(states => {
    console.log(states);

    process.exit(0);
  });
}).catch(err => console.log(err));
