const mongo = require('../lib/mongo');
var th = require('../brain/thresholds');

mongo.then(db => {
  const collection = db.collection('states');

  return collection.find({
      createdAt: { $gt: Date.now() - 30 * 60 * 1000 }
  }).toArray().then(states => {
  	states = th.getWinnerScore(states);
  
      console.log(states);

      process.exit(0);
  });
}).catch(err => console.log(err));
