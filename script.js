function onSquareHover(e, color) {
  e.target.style.backgroundColor = color;
  console.log("hi");
}
function initGrid(width, height, color) {
  const screenWidth = document.documentElement.clientWidth;
  const screenHeight = document.documentElement.clientHeight - 20;

  const squareHeight = screenHeight/height;
  const squareWidth = screenWidth/width;

  const gridWidth = Math.min(squareHeight, squareWidth) * width;
  const gridHeight = Math.min(squareHeight, squareWidth) * height;

  const grid = document.querySelector(".grid");
  grid.innerHTML = "";
  grid.style.height = `${gridHeight}px`;
  grid.style.width = `${gridWidth}px`;

  for (let i = 0; i < height; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < width; j++) {
      const square = document.createElement("div");
      square.classList.add("grid-square");
      console.log(color)
      square.addEventListener("mouseenter", e=>onSquareHover(e, color));

      row.appendChild(square);
    }

    grid.appendChild(row);
  }
}
function changeSettings() {
  const width = parseInt(prompt("width", 16));
  const height = parseInt(prompt("height", 16));
  const color = prompt("color", "black");

  initGrid(width, height, color);
}
document.querySelector("button.change-settings").addEventListener("click", changeSettings);

const width = 16, height = 16;
const color = "green";

initGrid(width, height, color);