var Cards = require("./Cards.js");
var Better = require("./Better.js");
var state = require('./lib/saveState');
var saveState = state.saveState;

module.exports = {

  VERSION: "HA!",

  bet_request: function(state, bet) {
    saveState(state, 'rounds');

    var value = Better.getBet(state);
    bet(value);
  },

  showdown: function(game_state) {
    state.saveState(game_state, 'states');
  },

  getState: state.loadState
};
