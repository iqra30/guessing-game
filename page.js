 
let randomNumber;
let wrongGuess;

function resetGame(){
 randomNumber = parseInt(Math.random() * 20);
 wrongGuess = 0;
}
resetGame();

function userNumber() {

    let number = parseInt(document.querySelector("input").value);

    if (randomNumber > number) {
        alert("you're too low");
        wrongGuess++;
    }
    else if
        (randomNumber < number) {
        alert("you're too high");
        wrongGuess++;
    }
    else {
        alert("correct, you're guess is right wrong guesses:" + wrongGuess);
        resetGame();
    }
}