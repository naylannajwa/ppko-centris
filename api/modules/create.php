<?php
/**
 * create.php — Tambah modul baru (Admin only)
 * Letakkan di: C:\xampp\htdocs\ppko-centris\api\modules\create.php
 */

require_once '../../config.php';
session_start();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

if (!isset($_SESSION['admin_id'])) {
    http_response_code(401);
    echo json_encode(['success' => false, 'error' => 'Unauthorized']);
    exit;
}

try {
    $data = json_decode(file_get_contents('php://input'), true);

    $required = ['track_id', 'title', 'slug', 'description', 'content'];
    foreach ($required as $field) {
        if (empty($data[$field])) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => "Field '$field' wajib diisi"]);
            exit;
        }
    }

    // Cek slug duplikat
    $stmt = $pdo->prepare("SELECT id FROM modules WHERE slug = ?");
    $stmt->execute([$data['slug']]);
    if ($stmt->fetch()) {
        echo json_encode(['success' => false, 'error' => 'Slug sudah digunakan, pakai slug lain']);
        exit;
    }

    // Urutan otomatis
    $stmt = $pdo->prepare("SELECT MAX(`order`) as max_order FROM modules WHERE track_id = ?");
    $stmt->execute([$data['track_id']]);
    $res   = $stmt->fetch();
    $order = ($res['max_order'] ?? 0) + 1;

    $stmt = $pdo->prepare("
        INSERT INTO modules (track_id, title, slug, subtitle, description, content, `order`, icon, is_published)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");
    $stmt->execute([
        $data['track_id'],
        $data['title'],
        $data['slug'],
        $data['subtitle'] ?? '',
        $data['description'],
        $data['content'],
        $order,
        $data['icon'] ?? '📚',
        $data['is_published'] ?? 1,
    ]);

    echo json_encode([
        'success' => true,
        'message' => 'Modul berhasil dibuat',
        'data'    => ['id' => $pdo->lastInsertId()],
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}