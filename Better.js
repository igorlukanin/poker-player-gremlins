var Cards = require("./Cards.js");

// hand as in game state
var getBorder = function(state) {
    var me = state.players[state.in_action];
    var myStack = me.stack;
    var buy_in = state.current_buy_in;
    var aliveCount = state.players.filter(p => p.state != "out").length;

    if (state.pot == state.small_blind * 3) return 6*small_blind;

    if (myStack / 2 / state.small_blind <= 3) return 0;

    
    var myBigBlind = (state.dealer + 2) % (state.players.length) == state.in_action;
    if (myBigBlind && state.pot == state.small_blind * 3) return 0;

    var careful = buy_in >= myStack / 2;
    return careful ? 25 : 23;
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