<?php
// Configuración de la conexión a la base de datos
$servername = "ivandiazmiragaya.com";
$username = "zagg294"; // Cambia esto por tu usuario de la base de datos
$password = "Ivan1246354."; // Cambia esto por tu contraseña de la base de datos
$dbname = "10853313_general"; // Cambia esto por el nombre de tu base de datos

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Definir la consulta para obtener el valor de la columna `apikey`
$sql = "SELECT apikey FROM openai"; // Asegúrate de reemplazar "tabla" con el nombre de tu tabla y usar un identificador adecuado

// Ejecutar la consulta
$result = $conn->query($sql);

// Verificar si se encontraron resultados
if ($result->num_rows > 0) {
    // Recuperar el valor de la columna `apikey`
    $row = $result->fetch_assoc();
    $apikey = $row['apikey']; // Extraer el valor del `apikey`

    echo json_encode(['apikey' => $apikey]); // Devolver el valor del `apikey` como un objeto JSON
} else {
    echo json_encode(['error' => 'No se encontró el valor de apikey.']);
}

// Cerrar la conexión
$conn->close();
?>

<div id="apikey">
    <?php echo $apikey; ?>
</div>
<script src="OpenaiCon.js"></script>