const intro = document.querySelector(".intro");
const burger = document.querySelector(".burger");
const body = document.querySelector("body");

const headerObserverOptions = {
  threshold: .9
};

const darkenHeaderOnScroll = new IntersectionObserver(function(
  entries,
  darkenHeaderOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      document.querySelector("header").classList.add("bg-dark");
    } else {
      document.querySelector("header").classList.remove("bg-dark");
    }
  });
},
headerObserverOptions);

darkenHeaderOnScroll.observe(intro);

burger.addEventListener("click", function() {
  const nav = document.querySelector("nav");
  nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';

  /* body.addEventListener("click", () => {
    document.querySelector("nav").style.display = "flex";
  }) */
})
