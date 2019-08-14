let randomNumber;
let counter = 0; // start from the bottom
let clickRollInterval;
let diceSound = new Audio('sound/diceSound.mp3');

// function for dice randomizer
function diceRoll() {
  randomNumber = Math.floor(Math.random() * 20) + 1; // number generated, 1-20

  let d20Images = 'images/d20' + randomNumber + '.jpg'; // ramdom number attached to image

  document.querySelector('.d20').setAttribute('src', d20Images); // image displayed

}

// function to roll the dice (called when button clicked)
function clickRoll() {

  clickRollInterval = setInterval(function() {
    diceSound.play();
    if (counter < 8 || counter > 0) {
      diceRoll();
      counter++;
      console.log(counter);
    }

    if (counter > 8) {
      clearInterval(clickRollInterval);
      counter = 0;
      document.querySelector('p').innerHTML = 'You rolled a ' + randomNumber + '!';
    }
  }, 80);

}
