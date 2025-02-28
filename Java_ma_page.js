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

window.onscroll= () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
  
    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
      })
    }
  })
/*------ --------------Petit menue----------------------- ------*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);
}
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

