const container = document.getElementById("main");

document.getElementById("width").innerHTML = window.innerWidth;
document.getElementById("height").innerHTML = window.innerHeight;


let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

for (let i = 0; i < 9; i++) {
  const square = document.createElement("div");
  container.appendChild(square);
  square.classList.add("square");
  setTimeout(() => {
    square.style.backgroundColor = randomColor;
  }, 5000);
}

const moveMouse = (e) => {
  const xMove = e.clientX;
  const yMove = e.clientY;
  document.getElementById("x").innerHTML = xMove;
  document.getElementById("y").innerHTML = yMove;
}
window.addEventListener("mousemove", moveMouse)




window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  document.getElementById("width").innerHTML = windowWidth;
  document.getElementById("height").innerHTML = windowHeight;
})