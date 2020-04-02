// All the variables from the HTML DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Function for the computerChoice in the game
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Adding if statement from letter to Rock, Papaer, Scissors
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}

// Function for the win
function win(userChoice, computerChoice) {
  // User score is getting +1 not ++ two times. Everytime you win it will appear one point
  userScore++;
  userScore_span.innerHTML = userScore;
  // Taking the usser and computer fontsize 3px and .sup is just the small letterss
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  // Taking ID from userChoice and put them in setTimeout and the glows. Instead of taking getElementByID i do in this way so it will be easier
  const userChoice_div = document.getElementById(userChoice);
  // Instead of adding "" and + , we jusst make it `` because it looks better in the ES6 version
  // result_p is the result paragraph that appears who wins, lose and draw, but this function here is win
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} beats ${convertToWord(
    computerChoice
  )}${smallCompWord} . You win! 😎`;
  // Adding a classlist in style.css (.green-glow). Everytime you win it will appear glow greeen.
  userChoice_div.classList.add("green-glow");
  // setTimeout function i delay on after you .green-glow appears. It also removes after 1000 = 1 second
  setTimeout(() => {
    userChoice_div.classList.remove("green-glow");
  }, 1000);
}

// Function for lose
function lose(userChoice, computerChoice) {
  // If you loose computerScore gets the point
  computerScore++;
  // Computer score is the leaderboard for the (comp)
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} loses to ${convertToWord(
    computerChoice
  )}${smallCompWord} . You Lost... 😔`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("red-glow");
  }, 1000);
}

// Function draw. No one will get the point if it is draw
function draw(userChoice, computerChoice) {
  // Not computerUser or userScore. Since no one will get the point it stays the same.
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} equals ${convertToWord(
    computerChoice
  )}${smallCompWord} . Draw! 😳`;
  userChoice_div.classList.add("blue-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("blue-glow");
  }, 1000);
}

// Function game
function game(userChoice) {
  const computerChoice = getComputerChoice();
  // Instead of taking if statement i do switch statement.
  switch (userChoice + computerChoice) {
    // Statement who wins. UserChoice + computerChoice. If it's opposite it will return the same. For example Rock => Scissors or Paper => Rock.
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      // Need to take (break) to finish the line
      break;
    // Statement for who lose. Rock => Paper or Paper => Scissors
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    // Statement who is getting draw. Basically the same Rock => Rock or Paper => Paper
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

// Main function
function main() {
  // Rock, Paper and scissors div's after clicking on element. Click function is the eventListener which is added here.
  rock_div.addEventListener("click", function() {
    // letter r, p and s are given in the 20th line above.
    // game() function is give in 89th line
    game("r");
  });

  paper_div.addEventListener("click", function() {
    game("p");
  });

  scissors_div.addEventListener("click", function() {
    game("s");
  });
}
// Function main to run
main();
