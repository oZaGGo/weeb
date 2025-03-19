//Github load

let githubAvatar = document.getElementById("githubAvatar")

githubAvatar.addEventListener("click", function () {
    window.open("https://github.com/oZaGGo")
})


//Social media load
let scrollable = Math.floor(window.innerHeight)

let yPart = scrollable / 15;

let animated = false;

document.addEventListener("mousemove", async function socialBoard(event) {

    if (event.clientY > yPart * 12) {

        if (!animated) {
            await wait(200)
            let social = document.getElementById("social")
            social.style.display = "none"

            let socialBoard = document.getElementById("socialBoard")
            socialBoard.style.display = "flex"
            socialBoard.classList.add("socialBoardMove")
            await wait(1500)
            socialBoard.style.opacity = "1"
            animated = true
        }

    } else {
        if (animated) {
            let socialBoard = document.getElementById("socialBoard")
            socialBoard.classList.remove("socialBoardMove")
            socialBoard.classList.add("socialBoardDown")
            await wait(1400)
            socialBoard.style.opacity = "0"
            socialBoard.style.display = "none"

            await wait(200)
            let social = document.getElementById("social")
            social.style.display = "flex"

            socialBoard.classList.remove("socialBoardDown")

            animated = false
        }
    }

})


//Routes

let route4 = document.getElementById("route4")

route4.addEventListener("click", function () {
    fetch('../sql/key.php')
        .then(response => response.text())
        .then(data => {
            apiKey = data;
            console.log("API Key:", apiKey);
        })
        .catch(error => {
            console.error("Hubo un error al obtener la API key:", error);
        });

    loadPage(event, "./routes/route4/index.html");
})

let route3 = document.getElementById("route3")

route3.addEventListener("click", function () {
    loadPage(event, "./routes/route3/index.html");
})

let route2 = document.getElementById("route2")

route2.addEventListener("click", function () {
    loadPage(event, "./routes/route2/index.html");
})

let route1 = document.getElementById("route1")

route1.addEventListener("click", function () {
    loadPage(event, "./routes/route1/index.html");
})