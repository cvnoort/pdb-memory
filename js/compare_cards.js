// Compare selected pair of cards
function compare(cards) {
    if (cards[0].innerHTML === cards[1].innerHTML) {
        collect(cards);
    } else {
        wrong(cards);
    }
}

// Collect matching pair of cards
function collect(cards) {
    setTimeout(function(){
        cards.forEach(function(element) {
            element.classList.add("collected");
        });
    }, 1000);
}

// Turn mismatched pair of cards back around
function wrong(cards) {
    setTimeout(function(){
        cards.forEach(function(element) {
            element.classList.remove("view");
        });
    }, 2000);
    
}
