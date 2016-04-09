
module.exports = {

  VERSION: "checker (no all in)",

  bet_request: function(game_state, bet) {
	if (game_state.current_buy_in > 500)
		bet(0);
	else
		bet(game_state.current_buy_in - game_state.players[game_state.in_action].bet);
  },

  showdown: function(game_state) {

  }
};
