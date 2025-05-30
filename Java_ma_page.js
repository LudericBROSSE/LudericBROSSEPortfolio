/*-------le menue deroulant--------------------------------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

/*------L'onglet alumer change en changeant de rubrique --------*/
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

// Fonction pour mettre à jour l'état actif des liens
function updateActiveLink() {
  let top = window.scrollY;

  section.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        // Vérifie si le lien correspond à l'ID de la section
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Écoute l'événement de défilement
window.onscroll = updateActiveLink;

// Gérer le clic sur les liens
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').substring(1); // Récupère l'ID cible

    // Vérifie si le lien est un lien interne (vers une section de la même page)
    if (targetId && document.getElementById(targetId)) {
      e.preventDefault(); // Empêche le comportement par défaut du lien
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Défilement fluide vers la section
    } else {
      // Si le lien redirige vers une autre page, laissez le comportement par défaut
      navLinks.forEach(link => link.classList.remove('active')); // Retire l'état actif de tous les liens
      link.classList.add('active'); // Ajoute l'état actif au lien cliqué
    }
  });
});

// Vérifie la page actuelle pour marquer le lien actif
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop(); // Récupère le nom de la page actuelle
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop(); // Récupère le nom de la page du lien
    if (linkPage === currentPage) {
      link.classList.add('active'); // Ajoute l'état actif au lien correspondant
    } else {
      link.classList.remove('active'); // Retire l'état actif des autres liens
    }
  });
});
// Écoute l'événement de défilement
window.onscroll = updateActiveLink;

// Gérer le clic sur les liens
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').substring(1); // Récupère l'ID cible

    // Vérifie si le lien est un lien interne (vers une section de la même page)
    if (targetId && document.getElementById(targetId)) {
      e.preventDefault(); // Empêche le comportement par défaut du lien
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Défilement fluide vers la section
    } else {
      // Si le lien redirige vers une autre page, laissez le comportement par défaut
      navLinks.forEach(link => link.classList.remove('active')); // Retire l'état actif de tous les liens
      link.classList.add('active'); // Ajoute l'état actif au lien cliqué
    }
  });
});

// Vérifie la page actuelle pour marquer le lien actif
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop(); // Récupère le nom de la page actuelle
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active'); // Ajoute l'état actif au lien correspondant
    }
  });
});

// Gérer le clic sur les liens pour le défilement fluide uniquement sur la page principale
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').substring(1); // Récupère l'ID cible

    // Vérifie si le lien est un lien interne (vers une section de la même page)
    if (targetId && document.getElementById(targetId)) {
      e.preventDefault(); // Empêche le comportement par défaut du lien
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Défilement fluide vers la section
    } else {
      // Si le lien redirige vers une autre page, laissez le comportement par défaut
      window.location.href = link.getAttribute('href');
    }
  });
});
/*------Le menue deroulant se ferme en changeant de menue ------*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active ');

/*------barre d avancement ------*/
ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000, // Correction de la faute de frappe dans "duration"
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); // Ajout de la propriété "origin" avec la valeur 'top'


