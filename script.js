(function(){
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Dark mode toggle (persists in localStorage)
  const btn = document.getElementById('modeBtn');
  const apply = m => document.documentElement.classList.toggle('light', m === 'light');
  const saved = localStorage.getItem('mode') || 'dark';
  apply(saved);
  if (btn){
    btn.textContent = saved === 'light' ? '🌙' : '☀️';
    btn.addEventListener('click', () => {
      const mode = document.documentElement.classList.contains('light') ? 'dark' : 'light';
      apply(mode);
      btn.textContent = mode === 'light' ? '🌙' : '☀️';
      localStorage.setItem('mode', mode);
    });
  }

  // Render projects from projects.js → window.PROJECTS
  const grid = document.getElementById('projectGrid');
  if (grid && Array.isArray(window.PROJECTS)){
    grid.innerHTML = window.PROJECTS.map(p => `
      <article class="card">
        <h3><a href="${p.link}" target="_blank" rel="noopener">${p.title}</a></h3>
        <p>${p.desc}</p>
        <div class="tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </article>
    `).join('');
  }
})();
