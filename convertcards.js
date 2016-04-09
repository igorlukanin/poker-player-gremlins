function convertCard(inCard){
    var rank = inCard.rank == "10" ? "T" : inCard.rank;
    return rank + inCard.suit.charAt(0);   
}

function convertHand(inHand){
    return inHand.map(c => convertCard(c));   
}


function test(){
    
    console.log(convertHand(    [
        {
                "rank": "10",
                "suit": "hearts"
            },
        {
                "rank": "A",
                "suit": "spades"
            },
    ]));
}

// test();
