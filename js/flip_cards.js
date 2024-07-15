function countGuess() {
    guesses++;
    document.querySelector("#guesses").innerText = guesses;
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
    }

}
