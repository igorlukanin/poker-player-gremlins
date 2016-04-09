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
	glob("*.json", options, function (er, files) {
		res.send(files);

		// files.forEach(function(file) {

		// });
	});
};

module.exports = {
	saveState: saveState,
	loadState: loadState
};
