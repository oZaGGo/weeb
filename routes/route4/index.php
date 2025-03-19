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

    <?php include '../../background/background.php'; ?>

    <?php include '../../header/header.php'; ?>

    <?php include '../../background/social/social.php'; ?>

    <div class="chat">
        <div id="bubbles" class="bubbles"></div>
    </div>

    <div id="inputBlock">
        <div class="input-container">
            <input type="text" id="chatInput" placeholder="Ask something.." />
            <button id="sendButton">Send</button>
        </div>
    </div>

    <!-- Scripts -->
    <script src="../../recyclable/data.js"></script>
    <script src="../../recyclable/dynamicView.js"></script>
    <script src="../../ia/api.js"></script>
    <script src="background/background-script.js"></script>
    <script src="audio/audio-manager.js"></script>
    <script src="header/nav.js"></script>
    <script src="chat.js"></script>
</body>

</html>