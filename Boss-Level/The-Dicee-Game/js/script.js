const btn = document.getElementById("refresh");
const results = document.getElementById("results");

const D1 = document.getElementById("D1");
const D2 = document.getElementById("D2");

const P1 = document.getElementById("P1");
const P2 = document.getElementById("P2");

const imagesArray = [
  "images/dado-1.png",
  "images/dado-2.png",
  "images/dado-3.png",
  "images/dado-4.png",
  "images/dado-5.png",
  "images/dado-5.png",
];

function P1WIN() {
  const winnerTitle = document.createElement("h1");
  winnerTitle.innerText = "P1 Win!";
  winnerTitle.id = "P1";
  winnerTitle.classList.add("txt1");
  results.appendChild(winnerTitle);
}

function P2WIN() {
  const winnerTitle = document.createElement("h1");
  winnerTitle.innerText = "P2 Win!";
  winnerTitle.id = "P2";
  winnerTitle.classList.add("txt2");
  results.appendChild(winnerTitle);
}

function DRAW() {
  const draw = document.createElement("h1");
  draw.innerText = "DRAW";
  draw.classList.add("txt2");
  results.appendChild(draw);
}

function roolDice() {
  let random1 = Math.floor(Math.random() * imagesArray.length);
  let random2 = Math.floor(Math.random() * imagesArray.length);

  D1.src = imagesArray[random1];
  D2.src = imagesArray[random2];

  if (random1 > random2) {
    P1WIN();
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  } else if (random1 == random2) {
    DRAW();
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  } else {
    P2WIN();
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }
}

btn.addEventListener("click", roolDice);
