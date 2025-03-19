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
        // 1️⃣ Esperar la respuesta de fetch
        const response = await fetch('../sql/key.php');
        apiKey = await response.text();
        console.log("API Key:", apiKey);

        // 2️⃣ Cargar la página de forma síncrona
        await loadPage(event, "./routes/route4/index.html");

        /*

        // 4️⃣ Obtener los elementos después de que la página haya cargado
        let bubbles = document.getElementById("bubbles");
        let sendButton = document.getElementById('sendButton');

        // 3️⃣ Importar el JavaScript de forma asíncrona
        const importJs = await import("/routes/route4/chat.js");
        importJs.chat();

        // 5️⃣ Cambiar el estilo del botón
        route4.style = "color: rgb(255, 0, 119) !important;";
        */
    } catch (error) {
        console.error("Hubo un error:", error);
    }
});
