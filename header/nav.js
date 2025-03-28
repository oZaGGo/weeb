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

route4.addEventListener("click", async function (event) {
    try {
        fetch('../sql/key.php')
            .then(response => response.text())
            .then(data => {
                localStorage.setItem('key', data);
                console.log(data);
            })
            .catch(error => {
                console.error("Hubo un error al obtener la API key:", error);
            });
        //Load routes/route4/index.html
        window.location.href = "routes/route4/index.php"
    } catch (error) {
        console.error("Hubo un error:", error);
    }
});
