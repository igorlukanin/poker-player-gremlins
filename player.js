var Cards = require("./Cards.js");
var Better = require("./Better.js");
var state = require('./lib/saveState');

module.exports = {

  VERSION: "all or nothing",

  bet_request: function(state, bet) {
    var me = state.players[state.in_action];
    var value = Better.getBet(me.hole_cards, me.stack, state.current_buy_in);
    bet(value);
  },

  showdown: function(game_state) {
    state.saveState(game_state);
  },

  getState: state.loadState
};
