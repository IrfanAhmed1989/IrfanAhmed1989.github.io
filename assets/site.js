document.addEventListener('DOMContentLoaded', () => {
  // Highlight current nav
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.topnav a[data-page]').forEach(a => {
    if (a.dataset.page === here) a.classList.add('active');
  });

  // Resume download counter (client-side)
  const link = document.getElementById('resumeLink');
  const badge = document.getElementById('resumeCount');
  if (badge){
    const key = 'irfan_resume_downloads';
    const n = Number(localStorage.getItem(key) || 0);
    badge.textContent = n;
    if (link){
      link.addEventListener('click', () => {
        const v = Number(localStorage.getItem(key) || 0) + 1;
        localStorage.setItem(key, String(v));
        badge.textContent = v;

        // Optional GA event (uncomment after adding GA below)
        // if (window.gtag) gtag('event', 'resume_download', { value: 1 });
      });
    }
  }

  // Smooth scroll for same-page fragment links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
    });
  });
});
