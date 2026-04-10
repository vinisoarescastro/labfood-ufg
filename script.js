/**
 * LabFood – UFG | script.js
 * Funcionalidades: navbar, canvas hero, scroll reveal, formulário, FAB
 */

/* ── 1. Navbar: scroll + mobile toggle ───────────────────── */
(function initNavbar() {
  const navbar     = document.getElementById('navbar');
  const navToggle  = document.getElementById('navToggle');
  const navLinks   = document.getElementById('navLinks');
  const allLinks   = navLinks.querySelectorAll('.nav-link');

  // Adiciona classe .scrolled quando rola
  function handleScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    updateFab();
  }

  // Toggle do menu mobile
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Fecha menu ao clicar em link
  allLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Fecha menu ao clicar fora
  document.addEventListener('click', e => {
    if (navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) &&
        !navToggle.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run on load
})();


/* ── 2. Hero Canvas – partículas moleculares ─────────────── */
(function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Redimensiona canvas
  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  // Cada nó = um ponto flutuante
  const NODES = 55;
  const nodes = Array.from({ length: NODES }, () => ({
    x:  Math.random() * canvas.width,
    y:  Math.random() * canvas.height,
    r:  Math.random() * 2.5 + 1,
    vx: (Math.random() - .5) * .35,
    vy: (Math.random() - .5) * .35,
  }));

  const LINE_DIST = 130;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move nós
    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
    });

    // Linhas entre nós próximos
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINE_DIST) {
          const alpha = (1 - dist / LINE_DIST) * .35;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(243,143,4,${alpha})`;
          ctx.lineWidth = .8;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Pontos — alterna entre vermelho e laranja
    nodes.forEach((n, i) => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = i % 2 === 0 ? 'rgba(218,46,8,0.6)' : 'rgba(243,143,4,0.55)';
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
})();


/* ── 3. Scroll Reveal – IntersectionObserver ─────────────── */
(function initReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Escalonamento sutil entre elementos num mesmo bloco
        const siblings = entry.target.closest('.services-grid, .team-grid, .audience-grid, .pg-grid, .parcerias-cards');
        if (siblings) {
          const allReveal = [...siblings.querySelectorAll('.reveal')];
          const idx = allReveal.indexOf(entry.target);
          entry.target.style.transitionDelay = `${idx * 80}ms`;
        }
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  targets.forEach(t => observer.observe(t));
})();


/* ── 4. Botão flutuante (FAB) ─────────────────────────────── */
function updateFab() {
  const fab = document.getElementById('fab');
  if (!fab) return;
  fab.classList.toggle('show', window.scrollY > 400);
}


/* ── 5. Rolagem suave para links internos ─────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navbarH = document.getElementById('navbar').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navbarH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();


/* ── 6. Placeholder: formulário removido conforme solicitado ── */
// O contato agora é feito diretamente por e-mail.


/* ── 7. Atualiza link ativo na navbar ao rolar ────────────── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link[href^="#"]');

  function updateActive() {
    const scrollY  = window.scrollY;
    const navbarH  = document.getElementById('navbar').offsetHeight;

    sections.forEach(section => {
      const top    = section.offsetTop - navbarH - 40;
      const bottom = top + section.offsetHeight;
      const id     = section.getAttribute('id');
      if (scrollY >= top && scrollY < bottom) {
        links.forEach(l => l.classList.remove('active-nav'));
        const match = document.querySelector(`.nav-link[href="#${id}"]`);
        if (match) match.classList.add('active-nav');
      }
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
})();
