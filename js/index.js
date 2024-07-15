// Select 9 PDB IDs from the complete list 
// and create two cards for each of them
var listPDB = selectPDB(9);
makeCards(listPDB);

// Flip cards when clicked,
// compare two cards and collect matching pairs
document.querySelectorAll(".card").forEach(
    function (element) {
        element.addEventListener("click", turnCard);
    } 
);

// Initialize guess counter
var guesses = 0;
