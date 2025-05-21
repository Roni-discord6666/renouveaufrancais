// Animation du scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Données des actualités
const actualites = [
  {
    titre: 'Manifestation nationale contre le communisme',
    date: '15 Mars 2025',
    description:
      "Rejoignez-nous pour la grande manifestation nationale contre l'idéologie communiste.",
  },
  {
    titre: 'Conférence sur la liberté économique',
    date: '20 Mars 2025',
    description:
      "Une conférence débat sur les bienfaits de l'économie de marché.",
  },
  {
    titre: 'Rassemblement pour la défense de la République',
    date: '25 Mars 2025',
    description:
      'Défendons ensemble les valeurs républicaines et la démocratie.',
  },
];

// Affichage des actualités
const actualitesGrid = document.querySelector('.actualites-grid');
if (actualitesGrid) {
  actualites.forEach((actualite) => {
    const article = document.createElement('article');
    article.className = 'actualite-card';
    article.innerHTML = `
            <h3>${actualite.titre}</h3>
            <p class="date">${actualite.date}</p>
            <p>${actualite.description}</p>
        `;
    actualitesGrid.appendChild(article);
  });
}

// Navbar responsive
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.classList.remove('scroll-up');
    return;
  }

  if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
    navbar.classList.remove('scroll-up');
    navbar.classList.add('scroll-down');
  } else if (
    currentScroll < lastScroll &&
    navbar.classList.contains('scroll-down')
  ) {
    navbar.classList.remove('scroll-down');
    navbar.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});
