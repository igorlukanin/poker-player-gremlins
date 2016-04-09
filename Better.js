var Cards = require("./Cards.js");

// hand as in game state
var getBet = function(hand, myStack, buy_in) {
  var score = Cards.getHandScore(hand);
  if (score > 25) {
      console.log(hand + " - allin");
      return 1000000;
  }
  // if (score > 25) {
  //     console.log(hand + " - stack/4");
  //     return myStack/2;
  //   }
  // if (score > 14 && buy_in < myStack/4){
  //   console.log(hand + " - ok");
  //   return buy_in;
  // }
  return 0;
};

module.exports = {
	getBet: getBet
};