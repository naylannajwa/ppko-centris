(async function(){
  try{
    const mobileResp = await fetch('/html/partials/mobile-menu.html');
    const mobileHtml = await mobileResp.text();
    const navResp = await fetch('/html/partials/navbar.html');
    const navHtml = await navResp.text();

    // insert so order is: nav then mobile
    document.body.insertAdjacentHTML('afterbegin', mobileHtml);
    document.body.insertAdjacentHTML('afterbegin', navHtml);

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        if (typeof toggleMobile === 'function') {
          toggleMobile();
        } else if (mobileMenu) {
          mobileMenu.classList.toggle('open');
        }
      });
    }

    // mark active link based on pathname (works for static pages)
    const path = location.pathname;
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    if (path.endsWith('/html/modul.html')) document.getElementById('nav-modul')?.classList.add('active');
    else if (path.endsWith('/html/informasi.html')) document.getElementById('nav-informasi')?.classList.add('active');
    else if (path.endsWith('/html/tentang.html')) document.getElementById('nav-tentang')?.classList.add('active');
    else document.getElementById('nav-home')?.classList.add('active');

  } catch(e) { console.error('include-navbar failed', e); }
})();
