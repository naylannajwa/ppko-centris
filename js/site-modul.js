document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const track = params.get('track') || 'hilir';
  
  // 1. Ambil info dasar track (Judul & Deskripsi) dari site-data.js
  const trackInfo = window.SITE_DATA && window.SITE_DATA.DATA && window.SITE_DATA.DATA[track];
  if (!trackInfo) return;

  const titleEl = document.getElementById('modullist-title');
  const descEl = document.getElementById('modullist-desc');
  const countEl = document.getElementById('modullist-count');
  const grid = document.getElementById('modullist-grid');

  if (titleEl) titleEl.textContent = trackInfo.title;
  if (descEl) descEl.textContent = trackInfo.desc;

  // 2. AMBIL DATA MODUL DARI DATABASE (API)
  try {
    const response = await fetch(`../api/modules/get.php?track=${track}`);
    const result = await response.json();

    if (result.success && result.data && result.data.length > 0) {
      if (countEl) countEl.innerHTML = `📚 ${result.data.length} Modul Tersedia`;

      grid.innerHTML = result.data.map((m, i) => `
        <div class="modul-card-item">
          <div class="modul-card-img">
            <img src="https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=400&q=80" alt="${m.title}" loading="lazy">
            <div class="modul-badge">MODUL ${i + 1}</div>
          </div>
          <div class="modul-card-body">
            <div class="modul-card-title">${m.title}</div>
            <div class="modul-card-desc">${m.description}</div>
            <div class="modul-meta">⏱️ Estimasi 45 Menit</div>
            <a class="btn-buka" href="isimodul.html?id=${m.id}">Buka Materi →</a>
          </div>
        </div>
      `).join('');
    } else {
      if (countEl) countEl.innerHTML = `📚 0 Modul Tersedia`;
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted);">Belum ada modul di pilar ini.</div>`;
    }
  } catch (e) {
    console.error("Gagal memuat modul.", e);
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:red;">Gagal memuat modul.</div>`;
  }
});