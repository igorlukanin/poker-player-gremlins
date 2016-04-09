const assert = require('assert');
const p = require('../player.js');

function parseCard(c){
    var r = c.charAt(0);
    if (r == 'T') r = 10;
    var ss = {
        's': 'spades',
        'd': 'diamonds',
        'h': 'hearts',
        'c': 'clubs'
    }
    return {
        rank: r,
        suit: ss[c.charAt(1)]
    };
}

function cards(s){
    var cs = s.split(' ');
    return cs.map(c => parseCard(c));
}


const communityCards = cards("4s Ah 6c");
    
var albert = {                                           
            "id": 0,                                
            "name": "Albert",                       
            "status": "active",                     
            "version": "Default random player",     
            "stack": 1010,                          
            "bet": 320                              
        };
var me =  {
            "id": 1,                                
            "name": "Bob",
            "status": "active",
            "version": "Default random player",
            "stack": 1590,
            "bet": 80,
            "hole_cards": cards("2h 3s")
        };
        
var chuck = {
            "id": 2,
            "name": "Chuck",
            "status": "out",
            "version": "Default random player",
            "stack": 0,
            "bet": 0
        };

  
const players3 = [albert, me, chuck];

const state = {
    "tournament_id":"550d1d68cd7bd10003000003",     
    "game_id":"550da1cb2d909006e90004b1",           
    "round":0,                                      
    "bet_index":0,                                  
    "small_blind": 10,                              
    "current_buy_in": 320,                          
    "pot": 400,                                     
    "minimum_raise": 240,                           
    "dealer": 1,                                    
    "orbits": 7,                                    
    "in_action": 1,                                 
    "players": players3,
    "community_cards": communityCards
};

describe('player', () => {
  it('should bet', () => {
    var s = state;
    p.bet_request(state, function(b){
        console.log(b);
        console.log(JSON.stringify(me.hole_cards));
        assert.equal(b, 0)  
    })
  });
});
