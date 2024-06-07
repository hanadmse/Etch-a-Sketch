const container = document.querySelector(".container");



let num = 16;
for (i = 0; i < num; i++) {
    let row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);
    for (j = 0; j < num; j++) {
        let square = document.createElement('div');
        square.className = "square";
        row.appendChild(square);
        square.addEventListener("click", () => {
            square.style.background = "red";
        });
    }
}



