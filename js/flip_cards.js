function countGuess() {
    guesses++;
    document.querySelector("#guesses").innerText = guesses;
}

function showAll() {
    setTimeout(function(){
        
        document.querySelectorAll(".card").forEach(function(element) {
            element.classList.remove("collected");
        });
        document.querySelectorAll(".card").forEach(function(element) {
            element.classList.add("review");
        });
        
        document.querySelectorAll(".card").forEach(function(element){
            var pdblink = "https://www.rcsb.org/structure/" + element.dataset.pdb ;
            element.innerHTML = 
                '<a href=' + pdblink + ' target="_blank">' +
                '<img src="' + element.dataset.pdbimg + '"' +
                'alt="'+ element.dataset.pdb + '"' +
                '>' +
                '</a>';
        });
    
    }, 2000);
}

function turnCard() {
    
    // List visible cards
    var cardsViewed = document.querySelectorAll(".view:not(.collected)"); 
    
    // If not already viewing two cards, show the clicked card
    if (cardsViewed.length > 1) {
        return;  // do nothing
    } else {
        this.classList.add("view");
    }
    
    // Add the new card to the list of visible cards
    cardsViewed = document.querySelectorAll(".view:not(.collected)"); 

    // If updated total is not two, do nothing
    if (cardsViewed.length < 2) {
        return;
    }
    else {
        // Compare the visible cards
        compare(cardsViewed);
        countGuess();
    
        // Show all cards when all have been collected
        cardsRemaining = document.querySelectorAll(".card:not(.view)");
        if (cardsRemaining.length === 0) {
            showAll();
        }
    }

}
