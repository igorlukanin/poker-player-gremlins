var Cards = require("./Cards.js");
var Better = require("./Better.js");
var state = require('./lib/saveState');

module.exports = {

  VERSION: "3",

  bet_request: function(state, bet) {
    state.saveState(game_state, 'rounds');

    var value = Better.getBet(state);
    bet(value);
  },

  showdown: function(game_state) {
    state.saveState(game_state, 'states');
  },

  getState: state.loadState
};
