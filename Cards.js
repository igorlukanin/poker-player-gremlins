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

module.exports = {
    getHandScore:getHandScore,
}
// test();
