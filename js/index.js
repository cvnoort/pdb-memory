function startGame() {
    
    // Select 9 PDB IDs from the complete list 
    // and create two cards for each of them
    var listPDB = selectPDB(9);
    makeCards(listPDB);

    // Initialize guess counter
    guesses = 0;
    document.querySelector("#guesses").innerText = guesses;

    // Flip cards when clicked,
    // compare two cards and collect matching pairs
    document.querySelectorAll(".card").forEach(
        function (element) {
            element.addEventListener("click", turnCard);
        }
    );
    
}


startGame();

// Restart game on button click
document.querySelector("#restart").addEventListener("click", startGame);
