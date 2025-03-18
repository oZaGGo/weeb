//Script for the ascii background effect

let word = "+";

let sizeX = Math.floor(window.innerWidth / 18); //18 px each character (including space)
let sizeY = Math.floor(window.innerHeight / 17); //17 px each line scape

let surface = new Array(sizeY).fill(0).map(() => new Array(sizeX+1).fill(0)); //surface to draw the background

let targetX = Math.floor(Math.random() * sizeX);
let targetY = Math.floor(Math.random() * sizeY);

function root() { //root function to start the background matrix
    for (let i = 0; i < sizeY; i++) {
        for (let j = 0; j < sizeX + 1; j++) {
            if (j == sizeX) {
                surface[i][j] = "\n";
                continue;
            }
            surface[i][j] = word + " ";
        }
    }
}

function printBackground() {
    let background = document.getElementById("background-effect");
    let surfaceString = "";
    for (let i = 0; i < sizeY; i++) {
        for (let j = 0; j < sizeX+1; j++) {
            surfaceString += surface[i][j];
        }
    }
    background.innerHTML = surfaceString;
}

function colorChanger(posY, posX) {
    let background = document.getElementById("background-effect");

    for (let i = 0; i < sizeY; i++) {
        for (let j = 0; j < sizeX; j++) {
            // Verificar si estamos en la posición específica
            if (i === posY && j === posX) {
                surface[i][j] = `<span style="color: white;">${word}</span> `;
            }
        }
    }
}

root();
colorChanger(targetY, targetX);
printBackground();

window.addEventListener("resize", function () {
    sizeX = Math.floor(window.innerWidth / 18);
    sizeY = Math.floor(window.innerHeight / 17);
    printBackground();
});