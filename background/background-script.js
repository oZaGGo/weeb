//Script for the ascii background effect

let word = "+"

let sizeX = Math.floor(window.innerWidth / 18) //18 px each character (including space)
let sizeY = Math.floor(window.innerHeight / 17) //17 px each line scape

let surface = new Array(sizeY).fill(0).map(() => new Array(sizeX + 1).fill(0)) //surface to draw the background

let posX = 10
let posY = 10

let targetX
let targetY

let lastMoveTime = 0;

let clac = document.getElementById("clac")
clac.volume = 0.4

let rainAudio = document.getElementById("rain")
rainAudio.loop = true
rainAudio.volume = 0.03

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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
    let surfaceString = ""
    for (let i = 0; i < sizeY; i++) {
        for (let j = 0; j < sizeX + 1; j++) {
            surfaceString += surface[i][j];
        }
    }
    background.innerHTML = surfaceString
}

function colorChanger(newPosY, newPosX) {
    let background = document.getElementById("background-effect")
    if (posX === newPosX && posY === newPosY) {
        return;
    }
    //Manage the input of the position
    if (newPosX < 2) {
        newPosX = 2
    }
    if (newPosX > sizeX - 3) {
        newPosX = sizeX - 3
    }

    if (newPosY < 2) {
        newPosY = 2
    }
    if (newPosY > sizeY - 3) {
        newPosY = sizeY - 3
    }

    //reset the color of the previous position
    for (let i = 0; i < sizeY; i++) {
        for (let j = 0; j < sizeX; j++) {
            if (i === posY && j === posX) {
                surface[i][j + 1] = word + " "
                surface[i][j - 1] = word + " "
                surface[i + 1][j] = word + " "
                surface[i - 1][j] = word + " "
                surface[i + 1][j + 1] = word + " "
                surface[i - 1][j - 1] = word + " "
                surface[i + 1][j - 1] = word + " "
                surface[i - 1][j + 1] = word + " "

            }
        }
    }

    posX = newPosX
    posY = newPosY

    for (let i = 0; i < sizeY; i++) {
        for (let j = 0; j < sizeX; j++) {
            if (i === newPosY && j === newPosX) {
                //Draw a circle around the mouse position
                surface[i][j + 1] = `<span style="color: white;">${word}</span> `
                surface[i][j - 1] = `<span style="color: white;">${word}</span> `
                surface[i + 1][j] = `<span style="color: white;">${word}</span> `
                surface[i - 1][j] = `<span style="color: white;">${word}</span> `
                surface[i + 1][j + 1] = `<span style="color: white;">${word}</span> `
                surface[i - 1][j - 1] = `<span style="color: white;">${word}</span> `
                surface[i + 1][j - 1] = `<span style="color: white;">${word}</span> `
                surface[i - 1][j + 1] = `<span style="color: white;">${word}</span> `

                const currentTime = Date.now();

                if (currentTime - lastMoveTime > 300) {
                    lastMoveTime = currentTime;
                    clac.currentTime = 0
                    clac.play()
                }

            }
        }
    }
}

root()
colorChanger(targetY, targetX)
printBackground()

window.addEventListener("resize", function () {
    sizeX = Math.floor(window.innerWidth / 18)
    sizeY = Math.floor(window.innerHeight / 17)
    root()
    printBackground()
})

//Manage the focus of the window

window.addEventListener("mousemove", function (event) {
    targetX = Math.floor(event.clientX / 18)
    targetY = Math.floor(event.clientY / 17)
    colorChanger(targetY, targetX)
    printBackground()
    rainAudio.play()
})