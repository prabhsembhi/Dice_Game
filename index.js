var ran1 = Math.floor(Math.random() * 6 + 1);
var ran2 = Math.floor(Math.random() * 6 + 1);

if (ran1 > ran2) {
  document.querySelector("h1").textContent = "Player1 Wins";
} else if (ran1 < ran2) {
  document.querySelector("h1").textContent = "Player2 Wins";
} else {
  document.querySelector("h1").textContent = "Its a Draw";
}

document
  .getElementsByClassName("img1")[0]
  .setAttribute("src", "./images/dice" + ran1 + ".png");
document
  .getElementsByClassName("img2")[0]
  .setAttribute("src", "./images/dice" + ran2 + ".png");
