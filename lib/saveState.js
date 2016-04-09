const fs = require('fs');
const glob = require('glob');

function saveState(game_state) {
  const fileName = [Date.now(), game_state.game_id, game_state.round, 'game_state.json'].join('.');

  try {
    fs.writeFile(fileName, JSON.stringify(game_state), function (err) {
      console.error(err);
    });
  } catch (err) {
    console.error(err);
  }
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
