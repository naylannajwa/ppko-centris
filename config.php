<?php
$host = "db.cpwasxmabuixklvudzji.supabase.co";
$port = "5432"; 
$db   = "postgres";
$user = "postgres";
$pass = "ppkoawisCentris1";

try {
    // Perhatikan: Menggunakan pgsql: (PostgreSQL) bukan mysql:
    $pdo = new PDO(
        "pgsql:host=$host;port=$port;dbname=$db",
        $user,
        $pass,
        [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_PERSISTENT         => false,
        ]
    );
} catch (PDOException $e) {
    die(json_encode([
        'success' => false,
        'error'   => 'Koneksi database gagal: ' . $e->getMessage()
    ]));
}