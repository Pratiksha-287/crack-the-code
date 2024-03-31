let a = Math.floor(Math.random() * 10) + 1;
console.log(a);

let chance = 5; //initialise chance outside the function

function checkGuess() {
  
  let n = parseInt(document.getElementById("guessInput").value);
  let score = 0;

  
  if (isNaN(n) || n < 1 || n > 10) {
    document.getElementById("message").innerText =
      "Please enter a valid number between 1 and 10.";
    return;
  }

  
  if (n === a) {
    score += 1;
    document.getElementById("message").innerText =
      "Congratulations! You guessed the correct number. Your score is: " +
      score;
    resetGame();
    
  } else {
    chance -= 1; // Decrease chance for each incorrect guess
    document.getElementById("message").innerText =
      "Incorrect guess. Try Again! You have " + chance + " more chances";
    
    if (chance === 0) {
      // Check if no more chances left
      document.getElementById("message").innerText =
        "Sorry, you've run out of chances. The correct number was " + a;
      
      resetGame();
    }

  }

}


function resetGame() {
  a = Math.floor(Math.random() * 10) + 1;
  console.log(a);
  
  chance = 5; // Reset chance to 5
  document.getElementById("guessInput").value = "";
}
