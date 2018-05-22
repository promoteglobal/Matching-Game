/*
 * Create a list that holds all of your cards
 */

// let element = "";
 let cards = [
     "fa-diamond",
     "fa-paper-plane-o",
     "fa-anchor",
     "fa-bolt",
     "fa-cube",
     "fa-anchor",
     "fa-leaf",
     "fa-bomb",
     "fa-diamond",
     "fa-paper-plane-o",
     "fa-anchor",
     "fa-bolt",
     "fa-cube",
     "fa-anchor",
     "fa-leaf",
     "fa-bomb",
 ]




 let shapeIcons = document.querySelectorAll('.card .fa');

 shapeIcons.forEach(function(element) {
  // let element1 = element;
   // console.log(element);
   // console.log(element.classList[1]);
   element.classList.remove(element.classList[1]);
   // console.log(element);

   // console.log(typeof cards);
   // console.log(Array.isArray(cards));


   // console.log(cards);
 //      cards.forEach(function(att2){
 //        console.log(cards.classList);
 //        // element.classList.add(att2);
 //      })
 //    console.log(element);
})


cards = shuffle(cards);
for (var i = 0; i < cards.length; i++){
  console.log(cards[i]);
  var newIcon = document.createElement("i");
  newIcon.classList.add(cards[i], 'fa');
  console.log(cards[i]);
  console.log(newIcon);
  shapeIcons.forEach(function(element){
    element.parentNode.replaceChild(newIcon, element);
  })
}
// shapeIcons.forEach(function(element){
  // cards.forEach(function(att2){

  // })





/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



// cards = shuffle(cards);
// // shapeIcons = shuffle(shapeIcons);
// console.log(cards);

// function testing(){
//   console.log(This is testing);
// }
const resetIcon = document.querySelector('.restart');
// const wholePage = document.querySelector('.container');
// const grid = document.querySelector('.deck');
// const liEl = document.querySelectorAll('.deck li');
// const card1 = document.getElementById('diamond');
// let shapeIcons = document.querySelectorAll('.card .fa');

resetIcon.addEventListener('click', function (event) {
   console.log('The resetIcon was clicked');
   cards = shuffle(cards)
   console.log(cards);
   // shapeIcons = shuffle(shapeIcons)
   // console.log(shapeIcons);

   // wholePage.reset();
});

// card1.addEventListener('click', function(e){
//   console.log('The document was clicked');
//   card1.classList.add('open');
//   card1.classList.add('show');
// })

// card1.addEventListener('click', function (event) {
//    console.log('The document was clicked');
//     }
// });
// grid.addEventListener('click', function (event) {
//    // console.log('The document was clicked');
//    if (event.target.nodeName.toLowerCase() === 'li') {  // ← verifies target is desired element
//         console.log('A span was clicked with text ' + event.target.textContent);
//         liEl.setAttribute('id', 'testing1');
//         // grid.classList.add('open show');
//     }
// });
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
