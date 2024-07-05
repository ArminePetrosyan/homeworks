const chingachung = (p1, p2) => {
  const ROCK = "Rock",
    SCISSORS = "Scissors",
    PAPER = "Paper";

  switch (true) {
    case p1 === p2:
      return "It's a draw";
    case p1 === ROCK && p2 === SCISSORS:
    case p1 === PAPER && p2 === ROCK:
    case p1 === SCISSORS && p2 === PAPER:
      return "The winner is player1";
    case p2 === ROCK && p1 === SCISSORS:
    case p2 === PAPER && p1 === ROCK:
    case p2 === SCISSORS && p1 === PAPER:
      return "The winner is player2";
    default:
      return "wrong input";
  }
};

// const player1Choice = prompt("player1 please enter: Rock, Paper, or Scissors");
// const player2Choice = prompt("player2 please enter: Rock, Paper, or Scissors");

// alert(chingachung(player1Choice, player2Choice));
