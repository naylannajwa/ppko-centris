-- =============================================
-- Database Schema untuk KO AWIS CRUD
-- =============================================
-- Jalankan script ini di phpMyAdmin

CREATE DATABASE IF NOT EXISTS `ppkocentris` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `ppkocentris`;

-- Table: Tracks (Jalur Pembelajaran)
CREATE TABLE `tracks` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(50) UNIQUE NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `subtitle` TEXT NOT NULL,
  `icon` VARCHAR(50),
  `color_class` VARCHAR(50),
  `description` TEXT,
  `lesson_count` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Table: Modules (Modul Pembelajaran)
CREATE TABLE `modules` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `track_id` INT NOT NULL,
  `title` VARCHAR(200) NOT NULL,
  `slug` VARCHAR(200) UNIQUE NOT NULL,
  `subtitle` TEXT,
  `description` TEXT,
  `content` LONGTEXT,
  `order` INT DEFAULT 0,
  `icon` VARCHAR(50),
  `is_published` BOOLEAN DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`track_id`) REFERENCES `tracks`(`id`) ON DELETE CASCADE,
  KEY `idx_track_id` (`track_id`),
  KEY `idx_slug` (`slug`)
) ENGINE=InnoDB;

-- Table: Articles (Artikel & Informasi)
CREATE TABLE `articles` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(200) NOT NULL,
  `slug` VARCHAR(200) UNIQUE NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  `excerpt` TEXT,
  `content` LONGTEXT,
  `author` VARCHAR(100),
  `image_url` VARCHAR(255),
  `read_time` INT,
  `is_published` BOOLEAN DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `idx_category` (`category`),
  KEY `idx_published` (`is_published`)
) ENGINE=InnoDB;

-- Insert sample data untuk Tracks
INSERT INTO `tracks` (`slug`, `title`, `subtitle`, `icon`, `color_class`, `description`, `lesson_count`) VALUES
('hilir', 'KO AWIS Hilir', 'Optimalisasi Produk & Pasca Panen', '🏭', 'card-hilir', 'Pelajari teknik pengolahan kakao modern untuk meningkatkan nilai produk', 7),
('entrepreneur', 'KO AWIS Entrepreneur', 'Pembangunan Mentalitas Bisnis', '💰', 'card-entre', 'Kembangkan keterampilan bisnis dan entrepreneurship Anda', 7),
('digital', 'KO AWIS Digital', 'Transformasi Teknologi & Konten', '💻', 'card-digital', 'Kuasai teknologi digital untuk memasarkan produk kakao', 6),
('sirkular', 'KO AWIS Sirkular', 'Ekosistem Ramah Lingkungan', '♻️', 'card-sirkular', 'Pembangunan berkelanjutan dan ekonomi sirkular untuk kakao', 6);

-- Insert sample modules untuk Hilir track
INSERT INTO `modules` (`track_id`, `title`, `slug`, `subtitle`, `description`, `content`, `order`, `is_published`) VALUES
(1, 'Standar Kualitas Kakao', 'standar-kualitas-kakao', 'Memahami standar internasional', 'Pelajari standar ISO dan SOP pengolahan kakao berkualitas tinggi', '<h2>Standar Kualitas Kakao</h2><p>Kakao berkualitas tinggi memerlukan standar tertentu...</p>', 1, 1),
(1, 'Fermentasi & Pengeringan', 'fermentasi-pengeringan', 'Teknik dasar pengolahan', 'Proses fermentasi dan pengeringan yang tepat untuk hasil optimal', '<h2>Fermentasi & Pengeringan</h2><p>Fermentasi adalah kunci utama...</p>', 2, 1);

-- Table: Admin Users (untuk login admin)
CREATE TABLE `admin_users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(100) UNIQUE NOT NULL,
  `email` VARCHAR(100) UNIQUE NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `name` VARCHAR(100),
  `role` ENUM('admin', 'editor') DEFAULT 'editor',
  `is_active` BOOLEAN DEFAULT 1,
  `last_login` TIMESTAMP NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `idx_username` (`username`),
  KEY `idx_email` (`email`)
) ENGINE=InnoDB;

-- Insert default admin (username: admin, password: admin123)
INSERT INTO `admin_users` (`username`, `email`, `password_hash`, `name`, `role`) VALUES
('admin', 'admin@koawis.local', '$2y$10$YfHEpfxmHqYgpk3NZRUU.Oa8t9IKfyTwC5kTYvNqZ0qTQQvLfBmYm', 'Admin KO AWIS', 'admin');

-- INDEXES untuk optimasi query
CREATE INDEX `idx_module_status` ON `modules`(`is_published`);
CREATE INDEX `idx_article_status` ON `articles`(`is_published`);
