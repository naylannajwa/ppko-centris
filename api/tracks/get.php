<?php
/**
 * api/tracks/get.php
 * GET all tracks
 */

require_once '../../config.php';

header('Content-Type: application/json');

try {
    $stmt = $pdo->query("
        SELECT * FROM tracks
        ORDER BY id ASC
    ");
    $tracks = $stmt->fetchAll();
    
    echo json_encode(['success' => true, 'data' => $tracks]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
