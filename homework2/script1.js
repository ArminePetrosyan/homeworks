const chingachung = (p1, p2) => {
  switch (true) {
    case p1 === p2:
      return "It's a draw";
    case p1 === "Rock" && p2 === "Scissors":
    case p1 === "Paper" && p2 === "Rock":
    case p1 === "Scissors" && p2 === "Paper":
      return "The winner is player1";
    case p2 === "Rock" && p1 === "Scissors":
    case p2 === "Paper" && p1 === "Rock":
    case p2 === "Scissors" && p1 === "Paper":
      return "The winner is player2";
    default:
      return "wrong input";
  }
};

// const player1Choice = prompt("player1 please enter: Rock, Paper, or Scissors");
// const player2Choice = prompt("player2 please enter: Rock, Paper, or Scissors");

// alert(chingachung(player1Choice, player2Choice));
