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
      let hasMatchingLink = false;
      navLinks.forEach(link => {
        if (link.getAttribute('href') === '#' + id) {
          hasMatchingLink = true;
        }
      });
      
      if (hasMatchingLink) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    }
  });

  // Ferme le menu si un lien est cliqué
  if(navbar.classList.contains('active')){
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
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

/*------ Animation d'apparition au défilement (Intersection Observer natif) ------*/
const applyScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.section-animate');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Animation jouée une seule fois
      }
    });
  }, {
    threshold: 0.15, // Se déclenche quand 15% de l'élément est visible
    rootMargin: "0px 0px -50px 0px"
  });

  animatedElements.forEach(el => observer.observe(el));
};

/*------ Bouton Retour en Haut ------*/
const setupBackToTop = () => {
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
};

/*------ Filtrage ------*/
const setupFilter = () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.filterable-item');

  if (filterBtns.length > 0 && items.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        items.forEach(item => {
          if (filterValue === 'all') {
            if (item.classList.contains('secondary-item')) {
              item.style.display = 'none';
            } else {
              item.style.display = 'flex';
            }
          } else if (item.getAttribute('data-category') === filterValue) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
};

// Initialisation globale
applyScrollAnimations();
setupBackToTop();
setupFilter();
