var Cards = require('../Cards');


var getWinner = function(state) {
	var winners = state.players.filter(function(player) {
		return player.hole_cards != undefined && player.amount_won != undefined;
	});

  if (winners.length == 0) {
    // Not last round
    return undefined;
  }

	return {
		hand: winners[0].hole_cards,
    handScore: Cards.getHandScore(winners[0].hole_cards),
		flop: state.community_cards,
    player: winners[0]
	};
};

var getWinnerScore = function(states) {
  return states
  .map(function(state) { return getWinner(state); })
  .filter(function(result) { return result != undefined; })
  .map(function(result) {
    return {
      bot: result.player.name,
      handScore: result.handScore
    };
  });
};


module.exports = {
  getWinnerScore: getWinnerScore
};