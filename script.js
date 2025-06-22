function init_grid(width, height) {
  const screenWidth = document.documentElement.clientWidth;
  const screenHeight = document.documentElement.clientHeight;

  const squareHeight = Math.floor(screenHeight/height);
  const squareWidth = Math.floor(screenWidth/width);

  const gridWidth = Math.min(squareHeight, squareWidth) * width;
  const gridHeight = Math.min(squareHeight, squareWidth) * height;

  const grid = document.querySelector(".grid");
  grid.style.height = `${gridHeight}px`;
  grid.style.width = `${gridWidth}px`;

  for (let i = 0; i < height; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < width; j++) {
      const square = document.createElement("div");
      square.classList.add("grid-square");

      row.appendChild(square);
    }

    grid.appendChild(row);
  }
}

const width = 16, height = 16;

init_grid(width, height);