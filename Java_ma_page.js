/*------- Le menu déroulant --------------------------------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
}

/*------ L'onglet actif change en changeant de rubrique --------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

function updateActiveLinkOnScroll() {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });

  // Ferme le menu si un lien est cliqué
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// Gérer le clic sur les liens pour le défilement fluide
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');

    // Vérifie si le lien est une ancre interne
    if (targetId.startsWith('#') && document.querySelector(targetId)) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Pour les liens externes, le comportement par défaut est conservé.
  });
});

// Écoute des événements
window.addEventListener('scroll', updateActiveLinkOnScroll);

document.addEventListener('DOMContentLoaded', () => {
    // S'assurer que le menu est fermé au chargement
    if (menuIcon && navbar) {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    }
});


/*------ Animation d'apparition au défilement ------*/
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
