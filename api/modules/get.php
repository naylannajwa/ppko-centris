<?php
/**
 * get.php — API untuk mengambil data modul & track
 * Letakkan di: C:\xampp\htdocs\ppko-centris\api\modules\get.php
 */

require_once '../../config.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$type = $_GET['type'] ?? 'modules';

try {
    // ============ TRACKS ============
    if ($type === 'tracks') {
        $stmt = $pdo->query("SELECT * FROM tracks ORDER BY id ASC");
        $tracks = $stmt->fetchAll();
        echo json_encode(['success' => true, 'data' => $tracks]);
        exit();
    }

    // ============ MODULES ============
    // GET single modul by ID
    if (isset($_GET['id'])) {
        $stmt = $pdo->prepare("
            SELECT m.*, t.title as track_title, t.slug as track_slug 
            FROM modules m
            JOIN tracks t ON m.track_id = t.id
            WHERE m.id = ?
        ");
        $stmt->execute([$_GET['id']]);
        $modul = $stmt->fetch();
        echo json_encode($modul
            ? ['success' => true, 'data' => $modul]
            : ['success' => false, 'error' => 'Modul tidak ditemukan']
        );
    }
    // GET modul by slug
    else if (isset($_GET['slug'])) {
        $stmt = $pdo->prepare("
            SELECT m.*, t.title as track_title, t.slug as track_slug 
            FROM modules m
            JOIN tracks t ON m.track_id = t.id
            WHERE m.slug = ? AND m.is_published = 1
        ");
        $stmt->execute([$_GET['slug']]);
        $modul = $stmt->fetch();
        echo json_encode($modul
            ? ['success' => true, 'data' => $modul]
            : ['success' => false, 'error' => 'Modul tidak ditemukan']
        );
    }
    // GET semua modul by track slug
    else if (isset($_GET['track'])) {
        $stmt = $pdo->prepare("
            SELECT m.*, t.title as track_title, t.id as track_id
            FROM modules m
            JOIN tracks t ON m.track_id = t.id
            WHERE t.slug = ? AND m.is_published = 1
            ORDER BY m."order" ASC
        ");
        $stmt->execute([$_GET['track']]);
        $modules = $stmt->fetchAll();
        echo json_encode(['success' => true, 'data' => $modules]);
    }
    // GET semua modul (termasuk draft jika all=1)
    else {
        $showAll = isset($_GET['all']) && $_GET['all'] == '1';
        $where = $showAll ? '' : 'WHERE m.is_published = 1';
        $stmt = $pdo->query("
            SELECT m.*, t.title as track_title, t.slug as track_slug
            FROM modules m
            LEFT JOIN tracks t ON m.track_id = t.id
            $where
            ORDER BY t.id, m."order" ASC
        ");
        $modules = $stmt->fetchAll();
        echo json_encode(['success' => true, 'data' => $modules]);
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}