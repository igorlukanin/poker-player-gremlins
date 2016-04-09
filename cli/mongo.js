const mongo = require('../lib/mongo');

mongo.then(db => {
  const collection = db.collection('states');

  return collection.find({
      createdAt: { $gt: Date.now() - 30 * 60 * 1000 }
  }).toArray()
  .then(states => {
      console.log(states);

      process.exit(0);
  });
}).catch(err => console.log(err));
