let winnerBtn;

function checkWinnerButton() {
    winnerBtn = Math.floor(Math.random() * 3 + 1);
}

checkWinnerButton();

function displayMessage(clickedButton, chosenButton) {
  if(clickedButton === chosenButton) {
      message.innerHTML += '<div id="message">' + "Congrats! You chose the Winner Button." + '</div>';
  } else {
      message.innerHTML += '<div id="message">' + "Sorry! Maybe next time." + '</div>';
  }
}


