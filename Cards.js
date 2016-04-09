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

function parseCards(s){
    var cs = s.split(' ');
    return cs.map(c => parseCard(c));
}

function convertCard(inCard){
    var rank = inCard.rank == "10" ? "T" : inCard.rank;
    return rank + inCard.suit.charAt(0);   
}

function convertHand(inHand){
    return inHand.map(c => convertCard(c));   
}
function getHandScore(hand){
    var c1 = hand[0];
    var c2 = hand[1];
    var score = scoreRank(c1.rank) + scoreRank(c2.rank);
    if (c1.rank == c2.rank)
        score += 10;
    if (c1.suit == c2.suit)
        score += 4;
    var diff = rankIndex(c1.rank)-rankIndex(c2.rank); 
    if (diff == 1 || diff == -1)
        score += 3;
    if (diff == 2 || diff == -2)
        score += 2;
    if (diff == 3 || diff == -3)
        score += 1;
    return score; 
}

function scoreRank(rank){
    var map = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 11,
        'J': 12,
        'Q': 13,
        'K': 14,
        'A': 16
    };
    return map[rank];
}
function rankIndex(rank){
    var map = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };
    return map[rank];
}

module.exports = {
    getHandScore:getHandScore,
    parseCard:parseCard,
    parseCards:parseCards,
    rankIndex:rankIndex
}
// test();
