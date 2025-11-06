

(function() {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Define tema inicial salvo no navegador
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggleButton.textContent = "☀️";
  } else {
    toggleButton.textContent = "🌙";
  }

  // Clique do botão
  toggleButton.addEventListener("click", () => {
    // Adiciona classe de animação
    toggleButton.classList.add("animating");

    setTimeout(() => {
      // Alterna o tema
      body.classList.toggle("dark");
      const darkMode = body.classList.contains("dark");
      toggleButton.textContent = darkMode ? "☀️" : "🌙";

      // Salva preferência
      localStorage.setItem("theme", darkMode ? "dark" : "light");

      // Remove classe após animação
      toggleButton.classList.remove("animating");
      toggleButton.style.opacity = "1";
    }, 350); // tempo da rotação e fade
  });
})();



// Smooth scroll para anchors internas
(function(){
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
})();

// Fade-in quando elementos aparecem
(function(){
  const SELECTORS = ['.fade-in', '.hero-text', 'main', 'section', '.sobre-texto', '.sobre-imagem', '.contato-container', '.projeto-item'];
  const elements = SELECTORS.map(s => Array.from(document.querySelectorAll(s))).flat();

  if (!('IntersectionObserver' in window)) {
    // fallback: apenas adiciona a classe
    elements.forEach(el => el.classList && el.classList.add('fade-in-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => io.observe(el));
})();

// Bot hover effect (suave)
(function(){
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transition = "box-shadow 0.25s, transform 0.18s";
      btn.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
      btn.style.transform = "translateY(-3px)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.boxShadow = "";
      btn.style.transform = "";
    });
  });
})();

// Pequeno efeito para inputs foco (se existirem forms nas páginas)
(function(){
  document.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('focus', () => el.classList.add('input-focus'));
    el.addEventListener('blur', () => el.classList.remove('input-focus'));
  });
})();

// Optional: botão "voltar ao topo" (cria dinamicamente)
(function(){
  const topBtn = document.createElement('button');
  topBtn.textContent = '↑';
  topBtn.setAttribute('aria-label', 'Ir para o topo');
  topBtn.style.position = 'fixed';
  topBtn.style.right = '18px';
  topBtn.style.bottom = '18px';
  topBtn.style.width = '42px';
  topBtn.style.height = '42px';
  topBtn.style.borderRadius = '10px';
  topBtn.style.border = 'none';
  topBtn.style.boxShadow = '0 6px 18px rgba(0,0,0,0.12)';
  topBtn.style.background = 'var(--card-color)';
  topBtn.style.cursor = 'pointer';
  topBtn.style.display = 'none';
  topBtn.style.zIndex = '999';
  document.body.appendChild(topBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) topBtn.style.display = 'block';
    else topBtn.style.display = 'none';
  });

  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();