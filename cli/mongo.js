const mongo = require('../lib/mongo');

mongo.then(db => {
  const collection = db.collection('states');

  return collection.find({}).limit(10).toArray().then(states => {
    console.log(states);

    process.exit(0);
  });
}).catch(err => console.log(err));
