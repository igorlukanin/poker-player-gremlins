var Cards = require("./Cards.js");

// hand as in game state
var getBorder = function(state){
  var me = state.players[state.in_action];
  var hand = me.hole_cards;
  var myStack = me.stack;
  var buy_in = state.current_buy_in;
  var aliveCount = state.players.filter(p => p.state != "out").length;
  
  if (myStack / 2 / state.small_blind <= 3) return 0;
  
  var myBlind = (state.dealer+2)%(state.players.length) == state.in_action;
  if (myBlind) return 0; 
  
  var border = 27;
  
  if(aliveCount == 4) {
    border = 20;
  }
  else if (aliveCount < 4){
    var careful = buy_in >= myStack/2; 
    border = careful ? 25 : 15;
  }
  return border;
}

var getBet = function(state) {
  var me = state.players[state.in_action];
  var hand = me.hole_cards;
  var score = Cards.getHandScore(hand);
  return score > getBorder(state) ? 10000 : 0;
};

module.exports = {
	getBet: getBet,
    getBorder: getBorder
};