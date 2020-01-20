
export class HeaderService{
  constructor() {
    this.intro = document.querySelector(".intro");

    this.headerObserverOptions = {
      threshold: .95
    };

    this.darkenHeaderOnScroll = this.declareObserver();
  }

  declareObserver(){
    return new IntersectionObserver(function(
      entries
    ) {
      entries.forEach(entry => {
        if (entry.intersectionRatio < 0.95) {
          document.querySelector("header").classList.add("bg-dark");
        } else {
          document.querySelector("header").classList.remove("bg-dark");
        }
      });
    },this.headerObserverOptions);
  }

  observe() {
    this.darkenHeaderOnScroll.observe(this.intro);
  }
}




