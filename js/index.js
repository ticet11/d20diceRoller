let randomNumber;

// function for dice randomizer
function diceRoll() {
    randomNumber = Math.floor(Math.random() * 20) + 1; // number generated, 1-6

    let d20Images = "images/d20" + randomNumber + ".jpg"; // ramdom number attached to image

    document.querySelector(".d20").setAttribute("src", d20Images); // image displayed
}

// function to roll the dice (called when button clicked)
function clickRoll() {
    const diceSound = new Audio("sound/diceSound.mp3");
    diceSound.play();
    let counter = 0;
    let clickRollInterval = setInterval(function () {
        if (counter < 9) {
            diceRoll();
            counter++;
            console.log(counter);
        } else {
            clearInterval(clickRollInterval);
            counter = 0;
            document.querySelector(
                "p"
            ).innerHTML = `You rolled a ${randomNumber}!`;
        }
    }, 80);
}
