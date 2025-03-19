

let bubbles = document.getElementById("bubbles")
let sendButton = document.getElementById('sendButton')

sendButton.addEventListener('click', async function () {

    //User bubble message
    message = chatInput.value;
    const newMessage = document.createElement('div');
    newMessage.classList.add('bubble');
    newMessage.textContent = message;
    bubbles.appendChild(newMessage);
    chatInput.value = "";

    //IA response

    let apikey = localStorage.getItem('key');

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
