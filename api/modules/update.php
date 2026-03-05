<?php
/**
 * api/modules/update.php
 * PUT update modul (Admin only)
 */

require_once '../../config.php';
session_start();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, POST');

// Check if admin is logged in
if (!isset($_SESSION['admin_id'])) {
    http_response_code(401);
    echo json_encode(['success' => false, 'error' => 'Unauthorized - Admin login required']);
    exit;
}

try {
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Validate required fields
    if (empty($data['id'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Module ID is required']);
        exit;
    }
    
    // Check if module exists
    $stmt = $pdo->prepare("SELECT id FROM modules WHERE id = ?");
    $stmt->execute([$data['id']]);
    if (!$stmt->fetch()) {
        http_response_code(404);
        echo json_encode(['success' => false, 'error' => 'Module not found']);
        exit;
    }
    
    // Build update query dynamically
    $fields = [];
    $values = [];
    $allowed_fields = ['track_id', 'title', 'slug', 'subtitle', 'description', 'content', 'order', 'icon', 'is_published'];
    
    foreach ($allowed_fields as $field) {
        if (isset($data[$field])) {
            $fields[] = "$field = ?";
            $values[] = $data[$field];
        }
    }
    
    if (empty($fields)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'No fields to update']);
        exit;
    }
    
    $values[] = $data['id'];
    $query = "UPDATE modules SET " . implode(', ', $fields) . " WHERE id = ?";
    
    $stmt = $pdo->prepare($query);
    $stmt->execute($values);
    
    echo json_encode([
        'success' => true,
        'message' => 'Modul berhasil diperbarui'
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
