//variables
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
    "fa-bicycle",
    "fa-bolt",
    "fa-cube",
    "fa-bicycle",
    "fa-leaf",
    "fa-bomb",
];

let iconClass2ndCard; //Extracted child class from second card
let iconClass2nd; //Extracted Icon class from second icon
let iconClass1stCard; //Extracted child class from first card
let iconClass1st; //Extracted Icon class from first icon
let firstCardEl; //Whole Element of first card
let secondCardEl; //Whole Element of second card
let countMatchesN = 0;
let starRating = 5;
let firstCardId;
let secondCardId



 // Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

    return array;
}

cards = shuffle(cards);

// Create and Place shuffled new elements in their new spot
for (let i = 0; i < cards.length; i++){
  let newIcon = document.createElement("i");
  newIcon.classList.add(cards[i], 'fa');
  let parent = document.getElementById(i);
  let child = document.getElementById(i+16);
  parent.replaceChild(newIcon, child);
}



// Count the number of clicks and reduce stars when reach count 25,35,45,55.  Counting clicks= https://stackoverflow.com/questions/27153750/count-clicks-on-element-with-javascript
document.addEventListener('click', function (event){
  if (event.target.classList.contains('card') || event.target.classList.contains('fa') && !event.target.classList.contains('la')){
    let element = event.currentTarget;
    element.clicks = (element.clicks || 0) + 1;
    document.querySelector('.moves').innerHTML = element.clicks;
    if (element.clicks === 25 ){
      const star1 = document.getElementById("a");
      star1.parentNode.removeChild(star1);
      starRating = 4;
    }
    if (element.clicks === 35 ){
      const star2 = document.getElementById("b");
      star2.parentNode.removeChild(star2);
      starRating = 3;
    }
    if (element.clicks === 45 ){
      const star3 = document.getElementById("c");
      star3.parentNode.removeChild(star3);
      starRating = 2;
    }
    if (element.clicks === 55 ){
      const star4 = document.getElementById("d");
      star4.parentNode.removeChild(star4);
      starRating = 1;
    }
  }
});



// set timer = https://stackoverflow.com/questions/37187504/javascript-second-counter
let seconds = 0;
const timerEl = document.getElementById('seconds-counter');

function incrementSeconds() {
  seconds += 1;
  timerEl.innerText = "Timer: " + seconds + " seconds.";
}

const cancel = setInterval(incrementSeconds, 1000);



// Match=stay open, turn green.  No match=both close.   Counting clicks= https://stackoverflow.com/questions/27153750/count-clicks-on-element-with-javascript
document.addEventListener('click', function (event){
  if (event.target.classList.contains('card') || event.target.classList.contains('fa') && !event.target.classList.contains('la')){ //If click on card or Icon
    let element = event.currentTarget;
    element.clicks = (element.clicks || 1) + 0; //I orignally had ||0) +1, but because (I think) there are 2 counting listeners, it acts funny with the counting of clicks and reducing of stars function. so I figured out something that works for both.
    if (element.clicks % 2 === 0 ){ //...........................................................Second card selected
      if (event.target.classList.contains('card')){//if click on card
        iconClass2ndCard = event.target.childNodes[1].classList.item(0);
        secondCardEl = event.target;
        secondCardId = event.target.id;
        console.log('iconClass2ndCard ' + iconClass2ndCard);
        console.log('secondCardEl ' + secondCardEl);
        console.log('secondCardId '+ secondCardId);
        if (iconClass1stCard === iconClass2ndCard && firstCardEl !== secondCardEl){ //.........If they match
          event.target.classList.remove('open','show');
          event.target.classList.add('match');
          firstCardEl.classList.add('match');
          countMatches();
          console.log('I matched!');
        }else if (event.target.classList.contains('match')){//...........if second card is already match do nothing
          console.log('I contain match');
          element.clicks = element.clicks - 1;
        }else{//................................................................If they don't match
          event.target.classList.add('open','show');
          setTimeout(function(){ firstCardEl.classList.remove('open','show') }, 270);
          setTimeout(function(){ secondCardEl.classList.remove('open','show') }, 270);
          console.log('It didnt match');
         if (event.target.classList.contains('match')){//...........if second card is already match do nothing
          console.log('I contain match');
          element.clicks = element.clicks - 1;
        }}
      }else{// If click on icon
        iconClass2nd = event.target.classList.item(0);
        console.log('iconClass2nd '+ iconClass2nd);
          if(iconClass2nd === iconClass1stCard && firstCardEl){
            firstCardEl.classList.remove('open','show')
          }
          else if (event.target.parentNode.classList.contains('match')){
             console.log('I contain match');
             element.clicks = element.clicks - 1;
         }
      }
    }else{ //....................................................................................First card selected
      if (event.target.classList.contains('card')){ //if click on card
        iconClass1stCard = event.target.childNodes[1].classList.item(0);
        firstCardEl = event.target;
        firstCardId = event.target.id;
        event.target.classList.add('open','show');
        console.log('iconClass1stCard ' + iconClass1stCard);
        console.log('firstCardEl '+ firstCardEl);
        console.log('firstCardId '+ firstCardId);
       }if (event.target.classList.contains('match')){
          console.log('I contain match');
          element.clicks = element.clicks - 1;
      }else{//if click on icon
        iconClass1st = event.target.classList.item(0);
        event.target.classList.add('open','show');
        console.log('iconClass1st ' + iconClass1st);
        if (event.target.classList.contains('match')){
           console.log('I contain match');
           element.clicks = element.clicks - 1;
       }
      }
    }
  }
});

//Reset game
const resetIcon = document.querySelector('.restart');
resetIcon.addEventListener('click', function (event) {
  location.reload();
});



//Popup Congrats
function countMatches(){
  countMatchesN = countMatchesN + 1;
  console.log(countMatchesN);
  if (countMatchesN === 8){
    setTimeout(function(){alert("Your time is " + seconds + " seconds and your star rating is " + starRating + ". Do you want to play again?") }, 470);;
    setTimeout(function(){location.reload(); }, 570);;
  }
}
