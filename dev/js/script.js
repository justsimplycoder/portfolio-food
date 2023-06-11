(function() {
  /*
   * Шапка сайта приклеивается к верху при скролле
   */
  window.addEventListener("scroll", (event) => {
    const header = document.querySelector('#l-header');
    header.classList.toggle('is-sticky', window.scrollY > 0);
  });
  /*
   * Показать/скрыть меню на небольших экранах
   */
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  const logo = document.querySelector('#l-logo');
  hamburger.addEventListener("click", function(event) {
    event.target.classList.toggle('is-active');
    nav.classList.toggle('is-show');
    logo.classList.toggle('is-toggle');
  });
  nav.addEventListener("click", (event) => {
    if(event.target.tagName != 'A') return;
    let e = new Event("click");
    hamburger.dispatchEvent(e);
  });
})();
