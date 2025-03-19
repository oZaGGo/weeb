function loadPage(event, page) {
    event.preventDefault();
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = "";
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar la página:", error));
}