<?php
require_once '../config.php';
require_once 'admin-config.php';
session_start();

// Kalau sudah login, langsung redirect ke dashboard
if (isset($_SESSION['admin_id'])) {
    header('Location: index.php');
    exit();
}

$error = '';

// Proses form POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');

    // Gunakan konstanta dari admin-config.php (bukan hardcode)
    if ($username === ADMIN_USERNAME && $password === ADMIN_PASSWORD) {
        $_SESSION['admin_id'] = 1;
        $_SESSION['admin_username'] = $username;
        header('Location: index.php');
        exit();
    } else {
        $error = 'Username atau password salah!';
    }
}
?>
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Admin Login — KO AWIS</title>
  <link rel="stylesheet" href="../css/styleadmin.css">
  <link rel="icon" type="image/png" href="../assets/logo-koawis-brand.png">
</head>
<body class="login-page-bg">
  <div class="login-container">
    <div class="login-header">
      <img src="../assets/logo-koawis-rectangle.png" alt="Logo KO AWIS" style="height: 130px; margin-bottom: 0px;">
      <p>Login untuk mengelola modul pembelajaran</p>
    </div>

    <?php if ($error): ?>
      <div class="alert-error">❌ <?= htmlspecialchars($error) ?></div>
    <?php endif; ?>

    <form method="POST" action="login.php">
      <div class="form-group">
        <label class="form-label">Username</label>
        <input class="form-input" type="text" name="username" placeholder="Username" required autocomplete="username">
      </div>
      <div class="form-group">
        <label class="form-label">Password</label>
        <input class="form-input" type="password" name="password" placeholder="Password" required autocomplete="current-password">
      </div>
      <button type="submit" class="btn-login">Login</button>
    </form>
  </div>
</body>
</html>