let bubbles = document.getElementById("bubbles")
let sendButton = document.getElementById('sendButton')
let apikey = localStorage.getItem('key');

let route4 = document.getElementById("route4")
route4.style = "color: rgb(255, 0, 119) !important;"

console.log(apikey);

sendButton.addEventListener('click', async function () {

    //User bubble message
    message = chatInput.value;
    const newMessage = document.createElement('div');
    newMessage.classList.add('bubble');
    newMessage.textContent = message;
    bubbles.appendChild(newMessage);
    chatInput.value = "";

    //IA response
    apikey = localStorage.getItem('key');
    iaResponse = await getCompletion(message, apikey);
    const newIaMessage = document.createElement('div');
    newIaMessage.classList.add('bubbleIa');
    newIaMessage.textContent = iaResponse;
    bubbles.appendChild(newIaMessage);

});


let chatInput = document.getElementById('chatInput');

chatInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});
