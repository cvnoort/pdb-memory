PDB Memory Game
===============

Final project for Javier Usobiaga Ferrer's Domestika course 
[Introduction to JavaScript Programming](https://www.domestika.org/en/courses/390-introduction-to-javascript-programming).

A memory game using images of proteins from the Protein Data Bank (PDB).

## Data

A list of PDB IDs was retrieved from [rcsb.org](https://www.rcsb.org) on May 2, 2024,
using the following search criteria:

* Entry polymer types is Protein (only)
* AND Scientific Name of the Source Organism is Homo sapiens
* AND Refinement Resolution range (upper incl.) 0 - 1.5 Å

This yielded 6430 results (saved under `rcsb_pdb_ids_20240502143937.txt`).

These PDB IDs are placed in an array in `js/all_PDB.js`.

## Code

### HTML

In `index.html` the basic elements of the page are defined 
before referring to the JavaScript scripts.

### CSS

All CSS is found under `style.css`, 
including the animation of card turns.

### JavaScript

The `js` directory contains all JavaScript for this project.

#### `all_PDB.js` 
Declares an array (`allPDB`) containing all 6430 PDB IDs.

#### `deal_cards.js`
The `selectPDB(nc)` function randomly selects `nc` PDB IDs from the `allPDB` array, 
placing two copies of each into a new array in random order, 
and the `makeCards(listPDB)` function creates a card 
with the corresponding image for each entry in the resulting `listPDB`.

#### `flip_cards.js`
The `turnCard()` function assigns a `view` class to cards when clicked, 
which makes their image visible. 
It then calls the `compare(cards)` function to compare pairs.
It also calls the `countGuess()` function, which 
increases the guess counter by one, each time a pair of cards has been selected.

#### `compare_cards.js`
The `compare(cards)` function compares the PDB ID of two cards. 
If they are the same, the `collect(cards)` function is called, 
otherwise the `wrong(cards)` is called. 
The `wrong(cards)` function flips both cards back around 
by removing the `view` class after 2 seconds. 
The `collect(cards)` function adds a `collected` class to both cards 
after 1 second, which makes them disappear from view.

#### `index.js`
The `startGame()` function selects 9 PDB IDs, 
generates cards with their images, 
initializes a guess counter at 0,
and flips and compares cards when clicked, 
using the functions defined in above scripts.
This function is called whenever the page is loaded to start the game,
as well as whenever the "Restart" button is clicked.

## Future directions

### Redirect

Add possibility to click on cards after completing the game 
to open the corresponding PDB entry page for more information.

### Settings

Possible difficulty levels:

* Image + Image (current version)
* Image with PDB ID + Image with PDB ID
* Image + Protein name(s)

Add possibility to select different species.
