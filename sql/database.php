<?php
$servername = "PMYSQL185.dns-servicio.com:3306"; // o la IP de tu servidor
$username = "zagg294"; // Tu nombre de usuario de la base de datos
$password = "Ivan1246354."; // Tu contraseña de la base de datos
$dbname = "10853313_general"; // El nombre de tu base de datos

// Crear la conexión
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verificar la conexión
if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

// Realizar la consulta
$sql = "SELECT apikey FROM openai LIMIT 1"; // El nombre de la tabla es 'openai' y la columna es 'apikey'
$result = mysqli_query($conn, $sql);

$row = $result->fetch_assoc();

$apikey = $row["apikey"];

// Cerrar la conexión
mysqli_close($conn);

echo "Conexión exitosa!";
?>

<script>
    // PHP nos inyecta el valor de $apikey directamente en JavaScript
    var apiKey = "<?php echo $apikey; ?>";

    // Imprimir el valor en la consola de JavaScript
    console.log("La API Key es:", apiKey);

    // Ahora puedes usar la variable apiKey en tu código JS
</script>