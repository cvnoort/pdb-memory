function selectPDB(nc) {
    
    const cards = []
    var cards_shuffled;

    // Add specified number of PDB IDs to the array, avoiding duplicates
    while (cards.length <= nc-1) {

        var myPDB = allPDB[(Math.floor(Math.random() * allPDB.length))];

        if (! cards.includes(myPDB)) {
            cards.push(myPDB);
        }

    }

    // Duplicate array to get two of each ID and put in random order
    var cards_set = cards.concat(cards);
    cards_shuffled = cards_set.sort(function() {
        return 0.5 - Math.random();
    });

    return cards_shuffled
    
}

function makeCards(listPDB) {

    // Remove any existing cards
    mesa.innerHTML = "";

    listPDB.forEach(function(PDB) {

        // Get URL for image of the selected PDB entry
        idPDB = PDB.toLowerCase();
        var pdbimg = "https://cdn.rcsb.org/images/structures/" + idPDB + "_assembly-1.jpeg";
       
        // Create a card div containing the image
        var card = document.createElement("div");
        card.innerHTML = 
            '<img src="' + pdbimg + '"' +
            'alt="'+ PDB + '"' +
            '>';
        card.classList.add("card");
        card.setAttribute("data-pdb", PDB);
        card.setAttribute("data-pdbimg", pdbimg);
        
        // Place cards on table in previously randomized order
        mesa.appendChild(card);
    });
}
