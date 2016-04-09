var Cards = require("./Cards.js");

// hand as in game state
var getBet = function(state) {
  var me = state.players[state.in_action];
  var hand = me.hole_cards;
  var myStack = me.stack;
  var buy_in = state.current_buy_in;
  var score = Cards.getHandScore(hand);
  var aliveCount = state.players.filter(p => p.state != "out").length;
  console.log("alive count " + aliveCount);
  if (aliveCount > 4){
    if (score > 32) {
        console.log("allin");
        return 1000000;
    }
    else
        return 0;
  }
  else if(aliveCount > 2) {
    if (score > 23) {
        console.log("allin 2");
        return 1000000;
    }
    else
        return 0;
  }
  else
    if (score > 15) {
        console.log("allin 3");
        return 1000000;
    }
    else
        return 0;
};

module.exports = {
	getBet: getBet
};