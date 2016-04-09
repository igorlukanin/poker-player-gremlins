var PokerEvaluator = require("poker-evaluator");
const state = require('./lib/saveState');
var Converter = require("./convertcards.js");

// hand as in game state
var scoreHand = function(hand) {
  var h = Converter.convertHand(hand);
  var result = PokerEvaluator.evalHand(h);
  return result.handRank;
};

module.exports = {

  VERSION: "checker (no all in)",

  bet_request: function(game_state, bet) {
    var me = game_state.players[game_state.in_action];
	if (game_state.current_buy_in > 500)
		bet(0);
	else
		bet(game_state.current_buy_in - game_state.players[game_state.in_action].bet);
  },

  showdown: function(game_state) {
    saveState(game_state);
  }
};

function test(){
    console.log(scoreHand([
    {rank:"10", suit:"spades"}, 
    {rank:"2", suit:"spades"},
    {rank:"2", suit:"diamonds"}
    ]));
}

test();