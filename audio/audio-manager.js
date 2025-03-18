//Mute button

let muteB = document.getElementById("volumeB")

let mute = false;

muteB.addEventListener("click", function () {
    let volumeUp = document.getElementById("volumeUpIcon")
    let volumeMuted = document.getElementById("volumeMuteIcon")

    if (mute) {
        mute = false
        volumeUp.style.display = "block"
        volumeMuted.style.display = "none"
        rain.volume = 0.03
        clac.volume = 0.4
    } else {
        mute = true
        volumeUp.style.display = "none"
        volumeMuted.style.display = "block"
        rain.volume = 0
        clac.volume = 0
    }
})