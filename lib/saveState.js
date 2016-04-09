const fs = require('fs');
const glob = require('glob');

const mongo = require('./mongo');

function saveState(game_state, colName) {
  mongo.then(db => {
    const collection = db.collection(colName);

    game_state.createdAt = Date.now();

    collection.insertOne(game_state);
  }).catch((err) => console.error(err));
}

var loadState = function(res) {
	glob("*.game_state.json", function (err, files) {
    if (err) {
      console.err(err);
      res.sendStatus(504);
    }

    res.json({
      files: files
    });
    return;

		files.forEach(function (file) {
			// req
			// hand
			// pot
			// win or lose

			// max pot
		});

		// res.json();
	});
};

module.exports = {
	saveState: saveState,
	loadState: loadState
};
