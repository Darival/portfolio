
export class NavService {
  constructor(){
    this.burger = document.querySelector(".nav-toggle");
    this.nav = document.querySelector(".nav-bar");
    this.navLinks = document.querySelectorAll("nav a");
    this.main = document.querySelector("main");
  }

  startNavEventListener(){
    this.burger.addEventListener("click", () => {
      this.nav.classList.toggle('open-nav');

      this.main.addEventListener('click', () => {
        this.nav.classList.remove('open-nav');
        this.main.removeEventListener('click');
      })
    });

    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.nav.classList.remove('open-nav');
        this.main.removeEventListener('click');
      })
    })
  }
}