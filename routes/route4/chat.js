export function chat() {

    sendButton.addEventListener('click', function () {

        //User bubble message
        const message = chatInput.value;
        const newMessage = document.createElement('div');
        newMessage.classList.add('bubble');
        newMessage.textContent = message;
        bubbles.appendChild(newMessage);
        chatInput.value = "";

        //IA response

        let iaMessage = getCompletion(message, apiKey);
        const newIaMessage = document.createElement('div');
        newIaMessage.classList.add('bubbleIa');
        newIaMessage.textContent = iaMessage;
        bubbles.appendChild(newIaMessage);

    });


    let chatInput = document.getElementById('chatInput');

    chatInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
}