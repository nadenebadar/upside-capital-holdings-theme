(function () {

  var navToggle = document.querySelector('.mobile-toggle');
  var navClass = document.querySelector('.header__megamenu--content');
  var buttonHeaderClass = document.querySelector('.header__button--content');
  var $body = document.body;
  var allToggles = [navClass, buttonHeaderClass];

  // Function for toggling mobile navigation
  function toggleNav() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('is-active');
      
    });
    $body.classList.toggle('no-scroll');
    navToggle.classList.toggle('is-active');
  }

  // Function for executing code on document ready
  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  // Execute JavaScript on document ready
  domReady(function () {
    if (!document.body) {
      return;
    } else {
     
      // Function dependent on navigation
      if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
      }
    }
  });
})();
