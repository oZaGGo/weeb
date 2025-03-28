<!DOCTYPE html>
<html lang="es">

<head>
    <meta name="robots" content="index, follow">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ivan Diaz Miragaya</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- Audio -->
    <audio id="clac" src="audio/sounds/low_clac3.wav"></audio>
    <audio id="rain" src="audio/background-sounds/rain.wav"></audio>

    <?php include 'background/background.php'; ?>

    <?php include 'header/header.php'; ?>

    <?php include 'background/social/social.php'; ?>


    <!--Dynamic body-->

    <div id="content"></div>

    <!-- Scripts -->
     
    <script src="recyclable/dynamicView.js"></script>
    <script src="ia/api.js"></script>
    <script src="background/background-script.js"></script>
    <script src="audio/audio-manager.js"></script>
    <script src="header/nav.js"></script>
</body>

</html>