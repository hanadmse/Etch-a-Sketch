const container = document.querySelector(".container");


var rowDiv = document.createElement("div");
let num = 16;
for (i = 0; i < num; i++) {
    row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);
    for (j = 0; j < num; j++) {
        square = document.createElement('div');
        square.className = "square";
        row.appendChild(square);
    }
}


