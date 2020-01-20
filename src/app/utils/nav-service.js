
export class NavService {
  constructor(){
    this.burger = document.querySelector(".burger");
    this.nav = document.querySelector("nav");
  }

  startNavEventListener(){
    this.burger.addEventListener("click", () => {
      this.nav.style.display = this.nav.style.display === 'none' ? 'flex' : 'none';
    });
  }
}