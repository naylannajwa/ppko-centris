<?php
require_once '../config.php';
session_start();
// Cek session PHP (bukan localStorage)
if (!isset($_SESSION['admin_id'])) {
    header('Location: login.php');
    exit();
}
$admin_username = htmlspecialchars($_SESSION['admin_username'] ?? 'Admin');
?>
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Admin Dashboard — KO AWIS</title>
  <link rel="stylesheet" href="../css/styleadmin.css">
<link rel="icon" type="image/png" href="assets/logo-koawis-brand.png">  
<script src="https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js"></script>
  <style>
    /* Sedikit perbaikan tampilan agar editornya tinggi dan rapi */
    .ck-editor__editable { min-height: 250px; font-family: 'Poppins', sans-serif; }
  </style>
</head>
<body>
  <div class="admin-container">
    <div class="admin-header">
      <img src="assets/logo-koawis-rectangle.png" alt="Logo KO AWIS" style="height: 130px; margin-bottom: 0px;">
      <h1 style="margin-top: 0; color: #3D2314; font-size: 1.5rem;">Admin Dashboard</h1>
      <p>Halo, <strong><?= $admin_username ?></strong>! Kelola modul pembelajaran dan konten.</p>
      
      <div class="admin-nav">
        <button onclick="showSection('modules', this)" class="active">Manajemen Modul</button>
        <button onclick="showSection('articles', this)">Artikel</button>
        <a href="logout.php"><button class="btn-logout">Logout</button></a>
      </div>

    </div>

    <!-- MODULES SECTION -->
    <div class="admin-section active" id="section-modules">
      <div class="card">
        <h2 style="margin-top:0; color:#3D2314;">Tambah Modul Baru</h2>
        <div id="alertBox"></div>
        <form id="moduleForm" onsubmit="saveModule(event)">
          <input type="hidden" id="moduleIdInput" value="">
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Pilar Pembelajaran</label>
              <select class="form-select" id="trackSelect" required>
                <option value="">-- Pilih Track --</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Judul Modul</label>
              <input class="form-input" id="titleInput" placeholder="Judul modul" required>
            </div>
            <div class="form-group">
              <label class="form-label">Slug (URL)</label>
              <input class="form-input" id="slugInput" placeholder="judul-modul" required>
            </div>
            <div class="form-group">
              <label class="form-label">Icon</label>
              <input class="form-input" id="iconInput" placeholder="📚" value="📚">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Sub-judul</label>
            <input class="form-input" id="subtitleInput" placeholder="Sub-judul modul (opsional)">
          </div>
          <div class="form-group">
            <label class="form-label">Deskripsi Singkat</label>
            <textarea class="form-textarea" id="descriptionInput" placeholder="Deskripsi singkat modul" required></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Konten Lengkap Modul</label>
            <textarea class="form-textarea" id="contentInput" placeholder="Konten modul" required style="min-height:200px;"></textarea>
          </div>
          <div style="display: flex; gap: 10px;">
            <button type="submit" class="btn-submit" id="btnSubmitForm">➕ Tambah Modul</button>
            <button type="button" class="btn-submit" id="btnCancelEdit" style="display: none; background: #666;" onclick="cancelEdit()">❌ Batal Edit</button>
          </div>
        </form>
      </div>

      <div class="card">
        <h2 style="margin-top:0; color:#3D2314;">Daftar Modul</h2>
        <table class="module-table" id="moduleTable">
          <thead>
            <tr><th>ID</th><th>Judul</th><th>Jalur</th><th>Status</th><th>Aksi</th></tr>
          </thead>
          <tbody id="moduleBody">
            <tr><td colspan="5" style="text-align:center; color:#999;">Loading...</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ARTICLES SECTION -->
    <div class="admin-section" id="section-articles">
      <div class="card">
        <h2 style="margin-top:0;">Manajemen Artikel</h2>
        <p style="color:#666;">Fitur ini akan segera tersedia.</p>
      </div>
    </div>
  </div>

  <script>
    let contentEditor;

    document.addEventListener('DOMContentLoaded', () => {
      // Mengubah textarea biasa menjadi Editor ala Word
      ClassicEditor
        .create(document.querySelector('#contentInput'))
        .then(editor => {
            contentEditor = editor;
        })
        .catch(error => {
            console.error(error);
        });

      loadTracks();
      loadModules();
    });
    
    function showSection(section, btn) {
      document.querySelectorAll('.admin-section').forEach(el => el.classList.remove('active'));
      document.getElementById('section-' + section).classList.add('active');
      document.querySelectorAll('.admin-nav button').forEach(el => el.classList.remove('active'));
      if (btn) btn.classList.add('active');
    }

    async function loadTracks() {
      try {
        const res = await fetch('../api/modules/get.php?type=tracks');
        const result = await res.json();
        if (result.success && result.data) {
          const select = document.getElementById('trackSelect');
          result.data.forEach(track => {
            const opt = document.createElement('option');
            opt.value = track.id;
            opt.textContent = track.title;
            select.appendChild(opt);
          });
        }
      } catch(e) { console.error('Error loading tracks:', e); }
    }

    async function loadModules() {
      try {
        const res = await fetch('../api/modules/get.php?type=modules&all=1');
        const result = await res.json();
        const tbody = document.getElementById('moduleBody');
        if (result.success && result.data && result.data.length > 0) {
          tbody.innerHTML = result.data.map(m => `
            <tr>
              <td>${m.id}</td>
              <td>${m.title}</td>
              <td>${m.track_title || '-'}</td>
              <td>${m.is_published ? 'Terbit' : 'Draft'}</td>
              <td>
                <button class="btn-action btn-edit" onclick="editModule(${m.id})">Edit</button>
                <button class="btn-action btn-delete" onclick="deleteModule(${m.id}, '${m.title.replace(/'/g,"\\'")}')">Hapus</button>
              </td>
            </tr>
          `).join('');
        } else {
          tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:#999;">Belum ada modul.</td></tr>';
        }
      } catch(e) {
        document.getElementById('moduleBody').innerHTML = '<tr><td colspan="5" style="color:red; text-align:center;">Error memuat data: ' + e.message + '</td></tr>';
      }
    }

    // 1. Fungsi Batal Edit (Mereset form kembali ke mode Tambah)
    function cancelEdit() {
      document.getElementById('moduleForm').reset();
      document.getElementById('moduleIdInput').value = '';
      contentEditor.setData(''); // Kosongkan text editor
      document.getElementById('btnSubmitForm').innerHTML = '➕ Tambah Modul';
      document.getElementById('btnCancelEdit').style.display = 'none';
    }

    // 2. Fungsi Klik Tombol Edit (Memuat data dari database ke form)
    async function editModule(id) {
      try {
        const res = await fetch(`../api/modules/get.php?id=${id}`);
        const result = await res.json();

        if (result.success && result.data) {
          const m = result.data;
          // Isi data ke dalam form
          document.getElementById('moduleIdInput').value = m.id;
          document.getElementById('trackSelect').value = m.track_id;
          document.getElementById('titleInput').value = m.title;
          document.getElementById('slugInput').value = m.slug;
          document.getElementById('iconInput').value = m.icon || '📚';
          document.getElementById('subtitleInput').value = m.subtitle || '';
          document.getElementById('descriptionInput').value = m.description || '';
          
          // Isi data ke CKEditor
          contentEditor.setData(m.content || '');

          // Ubah tombol jadi "Update"
          document.getElementById('btnSubmitForm').innerHTML = '💾 Update Modul';
          document.getElementById('btnCancelEdit').style.display = 'inline-block';

          // Scroll ke atas agar admin bisa langsung edit
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          alert('Gagal mengambil data modul.');
        }
      } catch (e) {
        alert('Error memuat data: ' + e.message);
      }
    }

    // 3. Fungsi Simpan (Menangani Tambah Baru ATAU Update)
    async function saveModule(e) {
      e.preventDefault();
      const alertBox = document.getElementById('alertBox');
      const id = document.getElementById('moduleIdInput').value; // Cek apakah ada ID
      
      const data = {
        track_id: document.getElementById('trackSelect').value,
        title: document.getElementById('titleInput').value,
        slug: document.getElementById('slugInput').value,
        subtitle: document.getElementById('subtitleInput').value,
        description: document.getElementById('descriptionInput').value,
        content: contentEditor.getData(), 
        icon: document.getElementById('iconInput').value,
        is_published: 1
      };

      // Tentukan URL berdasarkan mode (Update atau Create)
      if (id) data.id = id;
      const url = id ? '../api/modules/update.php' : '../api/modules/create.php';

      try {
        const res = await fetch(url, {
          method: 'POST', // Backend update.php kamu sudah support method POST untuk update
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await res.json();
        
        if (result.success) {
          alertBox.innerHTML = `<div class="alert alert-success">✅ Modul berhasil ${id ? 'diperbarui' : 'dibuat'}!</div>`;
          cancelEdit(); // Reset form & kembalikan ke mode tambah
          loadModules(); // Refresh tabel
          setTimeout(() => alertBox.innerHTML = '', 5000);
        } else {
          alertBox.innerHTML = '<div class="alert alert-error">❌ Error: ' + result.error + '</div>';
        }
      } catch(e) {
        alertBox.innerHTML = '<div class="alert alert-error">❌ Error: ' + e.message + '</div>';
      }
    }

    async function deleteModule(id, title) {
      if (!confirm('Yakin hapus modul "' + title + '"?')) return;
      try {
        const res = await fetch('../api/modules/delete.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id })
        });
        const result = await res.json();
        const alertBox = document.getElementById('alertBox');
        if (result.success) {
          alertBox.innerHTML = '<div class="alert alert-success">✅ Modul berhasil dihapus!</div>';
          loadModules();
          setTimeout(() => alertBox.innerHTML = '', 5000);
        } else {
          alertBox.innerHTML = '<div class="alert alert-error">❌ ' + (result.error || 'Gagal menghapus') + '</div>';
        }
      } catch(e) {
        alert('Error: ' + e.message);
      }
    }

    // Auto-generate slug from title
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('titleInput').addEventListener('input', function() {
        const slug = this.value.toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');
        document.getElementById('slugInput').value = slug;
      });
    });
  </script>
</body>
</html>