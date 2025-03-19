let bubbles = document.getElementById("bubbles")
let sendButton = document.getElementById('sendButton')
let apikey = localStorage.getItem('key');
let sendSound = document.getElementById('sendSound')
let reciveSound = document.getElementById('reciveSound')

//Change color of route4
route4.style = "color: rgb(255, 0, 119) !important;"

console.log(apikey);

sendButton.addEventListener('click', async function () {

    sendSound.currentTime = 0
    sendSound.play()

    sendButton.classList.remove('animate')
    void sendButton.offsetWidth
    sendButton.classList.add('animate')

    //User bubble message
    message = chatInput.value;
    if (message === "") {
        return;
    } else {
        const newMessage = document.createElement('div');
        newMessage.classList.add('bubble');
        newMessage.textContent = message;
        bubbles.appendChild(newMessage);
        chatInput.value = "";

        //IA response
        apikey = localStorage.getItem('key');
        const newIaMessage = document.createElement('div');
        newIaMessage.classList.add('bubbleIa');
        newIaMessage.textContent = "Typing...";
        bubbles.appendChild(newIaMessage);
        iaResponse = await getCompletion(message, apikey);
        reciveSound.currentTime = 0
        reciveSound.play()
        newIaMessage.textContent = iaResponse;
    }

});


let chatInput = document.getElementById('chatInput');

chatInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});
