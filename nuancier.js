const nuancier = document.getElementById("nuancier");
const add = document.getElementById("add");
const del = document.getElementById("delete");
let squareNumber = 1;

let red = 255;
let green = 255;
let blue = 255;

document.getElementById("red").addEventListener("input", (e) => {
  red = e.target.value;
  drawSquare();
});

document.getElementById("green").addEventListener("input", (e) => {
  green = e.target.value;
  drawSquare();
});

document.getElementById("blue").addEventListener("input", (e) => {
  blue = e.target.value;
  drawSquare();
});

const setColor = (square, red, green, blue) => {
  square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

function drawSquare() {
  nuancier.innerHTML = "";

  for (let i = 0; i < squareNumber; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    setColor(square, red, green, blue);

    const opacity = i === 0 ? 1 : 1 - 0.1 * (i + 1);
    square.style.opacity = opacity;

    nuancier.appendChild(square);
  }
}

add.addEventListener("click", (e) => {
  e.preventDefault();
  if (squareNumber < 10) {
    squareNumber++;
    drawSquare();
  }
});

del.addEventListener("click", (e) => {
  e.preventDefault();
  if (squareNumber > 1) {
    squareNumber--;
    drawSquare();
  }
});

drawSquare();


