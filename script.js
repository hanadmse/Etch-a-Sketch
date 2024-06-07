let container = document.querySelector(".container");
const changeBtn = document.querySelector(".changeGrid");
const clearBtn = document.querySelector(".clearGrid");

let numOfSquares = 16;
const createGrid = function(numOfSquares) {
    let squareSize = Math.floor(960 / numOfSquares);
    squareSize = squareSize.toString() + "px";
    for (i = 0; i < numOfSquares; i++) {
        let row = document.createElement("div");
        row.className = "row";
        row.style.height = squareSize;
        container.appendChild(row);
        for (j = 0; j < numOfSquares; j++) {
            let square = document.createElement('div');
            square.className = "square";
            square.style.height = squareSize;
            square.style.width = squareSize;
            row.appendChild(square);
            square.addEventListener("mouseover", () => {
                square.style.background = "black";
            });
            clearBtn.addEventListener("click", () => {
                square.style.background = "white";
            });
            
        }
    }
}

const changeGrid = function (numOfSquares) {
    container.remove();
    const body = document.querySelector("body");
    container = document.createElement("div");
    container.className = "container";
    body.appendChild(container);
    createGrid(numOfSquares);
}

createGrid(numOfSquares);

changeBtn.addEventListener("click", () => {
    numOfSquares = prompt("Enter desired number of squares, must be between 1-100: ");
    while (numOfSquares > 100 || numOfSquares < 1) {
        alert("Invalid number of squares entered!");
        numOfSquares = prompt("Number of squares must be in the accepted range between 1-100, please re-enter: ");
    }
    changeGrid(numOfSquares);
});




