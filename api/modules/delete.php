<?php
/**
 * delete.php — Hapus modul (Admin only)
 * Letakkan di: C:\xampp\htdocs\ppko-centris\api\modules\delete.php
 */

require_once '../../config.php';
session_start();

header('Content-Type: application/json');

if (!isset($_SESSION['admin_id'])) {
    http_response_code(401);
    echo json_encode(['success' => false, 'error' => 'Unauthorized']);
    exit;
}

try {
    $data = json_decode(file_get_contents('php://input'), true);

    if (empty($data['id'])) {
        echo json_encode(['success' => false, 'error' => 'ID modul wajib diisi']);
        exit;
    }

    $stmt = $pdo->prepare("DELETE FROM modules WHERE id = ?");
    $stmt->execute([$data['id']]);

    if ($stmt->rowCount() > 0) {
        echo json_encode(['success' => true, 'message' => 'Modul berhasil dihapus']);
    } else {
        echo json_encode(['success' => false, 'error' => 'Modul tidak ditemukan']);
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}