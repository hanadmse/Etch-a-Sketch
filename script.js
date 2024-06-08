let container = document.querySelector(".container");
const changeBtn = document.querySelector(".changeGrid");
const clearBtn = document.querySelector(".clearGrid");
const rainbowBtn = document.querySelector(".rainbowBtn");
const progBtn = document.querySelector(".progBtn");

let btnStatus = "";

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
                if (btnStatus === "rainbow") {
                    square.style.background = randomColor();
                }
                else if (btnStatus === "prog") {
                    square.style.background = progDarkening(square);
                }
            });
            clearBtn.addEventListener("click", () => {
                square.style.background = "white";
            });
            
        }
    }
}

const randomColor = function () {
    let color = "rgb(";
    for (i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 255);
            if (i < 2) {
                color += num.toString() + ", ";
            }
            else {
                color += num.toString() + ")"
            }
            
    }
    return color;
}

const progDarkening = function(square) {
    const computedStyle = window.getComputedStyle(square);
    let color = computedStyle.getPropertyValue("background-color");
    let char = color.charAt(color.length - 2);
    char = parseInt(char, 10);
    let white = "rgb(255, 255, 255)";
    let fullBlack = "rgb(1, 1, 1)";
    let black = "rgb(1, 1, 1, 0.";
    if (color === white) {
        return "rgb(1, 1, 1, 0.1)";
    }
    else if (color === fullBlack || char === 9) {
        return fullBlack;
    }
    else {
        char++;
        black += char + ")";
        return black;
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

changeBtn.addEventListener("click", () => {
    numOfSquares = prompt("Enter desired number of squares, must be between 1-100: ");
    while (numOfSquares > 100 || numOfSquares < 1) {
        alert("Invalid number of squares entered!");
        numOfSquares = prompt("Number of squares must be in the accepted range between 1-100, please re-enter: ");
    }
    changeGrid(numOfSquares);
});

rainbowBtn.addEventListener("click", () => {
    btnStatus = "rainbow";
})


progBtn.addEventListener("click", () => {
    btnStatus = "prog";
})


createGrid(numOfSquares);



