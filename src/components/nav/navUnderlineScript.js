const currentPath = window.location.pathname;
const homeLink = document.querySelector('.nav-header__nav-link-home');
// const aboutLink = document.querySelector('.nav-header__nav-link-about');

if (currentPath === '/#/accueil' || currentPath === '/') {
  homeLink.classList.add('active');
}
// else if (currentPath.includes('/about')) {
//   aboutLink.classList.add('active');
// }
