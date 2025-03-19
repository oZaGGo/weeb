<!DOCTYPE html>
<html lang="es">

<head>
    <meta name="robots" content="index, follow">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ivan Diaz Miragaya</title>
    <link rel="stylesheet" href="../../style.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- Audio -->
    <audio id="clac" src="../../audio/sounds/low_clac3.wav"></audio>
    <audio id="rain" src="../../audio/background-sounds/rain.wav"></audio>
    <audio id="sendSound" src="../../audio/sounds/send.wav"></audio>
    <audio id="reciveSound" src="../../audio/sounds/recive.wav"></audio>

    <?php include '../../background/background.php'; ?>

    <?php include '../../header/header.php'; ?>

    <?php include '../../background/social/social.php'; ?>

    <div class="chat">
        <div id="bubbles" class="bubbles"></div>
    </div>

    <div id="inputBlock">
        <div class="input-container">
            <input type="text" id="chatInput" placeholder="Ask something.." />
            <button id="sendButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="0.8rem" fill="currentColor" class="sendIcon" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                </svg>
            </button>
        </div>
    </div>

    <!-- Scripts -->
    <script src="../../recyclable/dynamicView.js"></script>
    <script src="../../ia/api.js"></script>
    <script src="../../background/background-script.js"></script>
    <script src="../../audio/audio-manager.js"></script>
    <script src="../../header/nav.js"></script>
    <script src="chat.js"></script>
</body>

</html>