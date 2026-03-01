document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const track = params.get('track') || 'hilir';
  const data = window.SITE_DATA && window.SITE_DATA.DATA && window.SITE_DATA.DATA[track];
  if (!data) return;

  const titleEl = document.getElementById('modullist-title');
  const descEl = document.getElementById('modullist-desc');
  const countEl = document.getElementById('modullist-count');
  const grid = document.getElementById('modullist-grid');

  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = data.desc;
  if (countEl) countEl.innerHTML = `📚 ${data.count}`;

  if (grid) {
    grid.innerHTML = (data.modules && data.modules.length ? data.modules : []).map((m, i) => `
      <div class="modul-card-item">
        <div class="modul-card-img"><img src="${m.img}" alt="${m.title}" loading="lazy"><div class="modul-badge">MODUL ${m.num}</div></div>
        <div class="modul-card-body">
          <div class="modul-card-title">${m.title}</div>
          <div class="modul-card-desc">${m.desc}</div>
          <div class="modul-meta">⏱️ ${m.time}</div>
          <a class="btn-buka" href="login.html">Masuk untuk membuka materi →</a>
        </div>
      </div>
    `).join('');
  }
});
