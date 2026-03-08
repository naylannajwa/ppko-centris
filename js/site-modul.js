document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const track = params.get('track') || 'hilir';
  
  const titleEl = document.getElementById('modullist-title');
  const descEl = document.getElementById('modullist-desc');
  const countEl = document.getElementById('modullist-count');
  const grid = document.getElementById('modullist-grid');

  // 1. Ambil Info Track & Modul dari Supabase
  try {
    // Jika elemen grid ada (artinya kita di halaman modullist.html)
    if (grid) {
      // Ambil Track Info
      const { data: trackData, error: trackError } = await supabase
        .from('tracks')
        .select('*')
        .eq('slug', track)
        .single();
        
      if (trackError) throw trackError;
      
      if (trackData) {
        if (titleEl) titleEl.textContent = trackData.title;
        if (descEl) descEl.textContent = trackData.description;
      }

      // Ambil Modules
      const { data: modules, error: modulError } = await supabase
        .from('modules')
        .select('*')
        .eq('track_id', trackData.id)
        .eq('is_published', true)
        .order('order', { ascending: true });

      if (modulError) throw modulError;

      if (modules && modules.length > 0) {
        if (countEl) countEl.innerHTML = `<i class="fas fa-book"></i> ${modules.length} Modul Tersedia`;

        grid.innerHTML = modules.map((m, i) => `
          <div class="modul-card-item">
            <div class="modul-card-img">
              <img src="${m.image_url || 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=400&q=80'}" alt="${m.title}" loading="lazy">
              <div class="modul-badge">MODUL ${i + 1}</div>
            </div>
            <div class="modul-card-body">
              <div class="modul-card-title">${m.title}</div>
              <div class="modul-card-desc">${m.description || ''}</div>
              <div class="modul-meta"><i class="far fa-clock"></i> Estimasi 45 Menit</div>
              <a class="btn-buka" href="isimodul.html?id=${m.id}">Buka Materi →</a>
            </div>
          </div>
        `).join('');
      } else {
        if (countEl) countEl.innerHTML = `<i class="fas fa-book"></i> 0 Modul Tersedia`;
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted);">Belum ada modul di pilar ini.</div>`;
      }
    }
    
    // Update jumlah modul di halaman landing (modul.html) jika ada
    // (Opsional, jika ingin dinamis di halaman depan)
    
  } catch (e) {
    console.error("Gagal memuat modul.", e);
    if (grid) grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:red;">Gagal memuat modul. Pastikan koneksi internet lancar.</div>`;
  }
});