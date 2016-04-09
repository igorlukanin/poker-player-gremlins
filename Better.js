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
    if (score > 27) {
        console.log("allin");
        return 1000000;
    }
    else
        return 0;
  }
  else if(aliveCount == 4) {
    if (score > 20) {
        console.log("allin 2");
        return 1000000;
    }
    else
        return 0;
  }
  else{ //2 or 3 players
    var careful = buy_in >= myStack/2; 
    var border = careful ? 25 : 15;
    if (score > border){
        return 10000;
    }
    else
        return 0;
  }
};

module.exports = {
	getBet: getBet
};