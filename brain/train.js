var brain = require('brain'),
	data = require('./data.json');


var oneState = {
  "tournament_id": "56fad97a364b600003000003",
  "game_id": "5708ceb8dfae79000300014a",
  "round": 175,
  "players": [
    {
      "name": "Blitz",
      "stack": 0,
      "status": "out",
      "bet": 0,
      "version": "Blitz speed withod bounds!",
      "id": 0
    },
    {
      "name": "EnazaTeam",
      "stack": 592,
      "status": "folded",
      "bet": 0,
      "version": "2.3.7",
      "id": 1
    },
    {
      "name": "Vostok",
      "stack": 2189,
      "status": "folded",
      "bet": 0,
      "version": "Default Python folding player",
      "id": 2
    },
    {
      "name": "Gremlins",
      "stack": 868,
      "status": "folded",
      "bet": 0,
      "hole_cards": [
        {
          "rank": "A",
          "suit": "hearts"
        },
        {
          "rank": "J",
          "suit": "hearts"
        }
      ],
      "version": "all or nothing (alivecount 23)",
      "id": 3
    },
    {
      "name": "zzz",
      "stack": 0,
      "status": "out",
      "bet": 0,
      "version": "zzz-ace",
      "id": 4
    },
    {
      "name": "Air Cubes of Press",
      "stack": 3351,
      "status": "active",
      "bet": 0,
      "version": "Air v1.0.2",
      "amount_won": 300,
      "id": 5
    },
    {
      "name": "omskbid666",
      "stack": 0,
      "status": "out",
      "bet": 0,
      "version": "I LOVE UNICODE",
      "id": 6
    }
  ],
  "small_blind": 50,
  "big_blind": 100,
  "orbits": 25,
  "dealer": 3,
  "community_cards": [
    {
      "rank": "7",
      "suit": "hearts"
    },
    {
      "rank": "9",
      "suit": "clubs"
    },
    {
      "rank": "A",
      "suit": "clubs"
    }
  ],
  "current_buy_in": 0,
  "pot": 0
};

var twoState = {
  "tournament_id": "56fad97a364b600003000003",
  "game_id": "5708ceb8dfae79000300014a",
  "round": 312,
  "players": [
    {
      "name": "Blitz",
      "stack": 0,
      "status": "out",
      "bet": 0,
      "version": "Blitz speed withod bounds!",
      "id": 0
    },
    {
      "name": "EnazaTeam",
      "stack": 0,
      "status": "out",
      "bet": 0,
      "version": "2.3.7",
      "id": 1
    },
    {
      "name": "Vostok",
      "stack": 7000,
      "status": "active",
      "bet": 0,
      "hole_cards": [
        {
          "rank": "J",
          "suit": "clubs"
        },
        {
          "rank": "9",
          "suit": "diamonds"
        }
      ],
      "version": "Default Python folding player",
      "amount_won": 1478,
      "id": 2
    },
    {
      "name": "Gremlins",
      "stack": 0,
      "status": "out",
      "bet": 0,
      "hole_cards": [],
      "version": "all or nothing (alivecount 23)",
      "id": 3
    },
    {
      "name": "zzz",
      "stack": 0,
      "status": "out",
      "bet": 0,
      "version": "zzz-ace",
      "id": 4
    },
    {
      "name": "Air Cubes of Press",
      "stack": 0,
      "status": "out",
      "bet": 0,
      "version": "Air v1.0.2",
      "id": 5
    },
    {
      "name": "omskbid666",
      "stack": 0,
      "status": "out",
      "bet": 0,
      "version": "I LOVE UNICODE",
      "id": 6
    }
  ],
  "small_blind": 1000,
  "big_blind": 2000,
  "orbits": 44,
  "dealer": 5,
  "community_cards": [
    {
      "rank": "J",
      "suit": "hearts"
    },
    {
      "rank": "10",
      "suit": "spades"
    },
    {
      "rank": "A",
      "suit": "diamonds"
    },
    {
      "rank": "A",
      "suit": "spades"
    },
    {
      "rank": "5",
      "suit": "clubs"
    }
  ],
  "current_buy_in": 0,
  "pot": 0
};


var extractFeatures = function(firstRound, lastRound) {
	var we = lastRound.players.filter(function(player) {
    return player.name == "Gremlins";
  })[0];

	var winner = lastRound.players.filter(function(player) {
		return player.amount_won != undefined;
	})[0];

	console.log(we);
	console.log(winner);

	return {
		// hand: firstRound.players[firstRound.in_action].hole_cards,
		// stack: firstRound.players[firstRound.in_action].stack,
		win: winner.name == we.name
	};
};


var features = extractFeatures(oneState, twoState);

console.log(features);