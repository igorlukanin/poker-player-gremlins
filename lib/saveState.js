const fs = require('fs');

function saveState(game_state) {
  const fileName = [Date.now(), game_state.game_id, game_state.round, 'game_state.json'].join('.');

  try {
    fs.writeFile(fileName, JSON.stringify(game_state), function (err)
      console.error(err);
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = saveState;
