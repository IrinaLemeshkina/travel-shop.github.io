let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');
let bodyElements = document.querySelectorAll('.navigation__link--close-menu');

const showMenu = () => {
  if (navToggle) {
    navMain.classList.remove('navigation--nojs');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('navigation--closed')) {
        navMain.classList.remove('navigation--closed');
        navMain.classList.add('navigation--opened');
        window.scrollLock.disableScrolling();
      } else {
        navMain.classList.add('navigation--closed');
        navMain.classList.remove('navigation--opened');
        window.scrollLock.enableScrolling();
      }
    });

    document.addEventListener('click', (e) => {
      const withinBoundaries = e.composedPath().includes(navMain);
      if (!withinBoundaries) {
        if (navMain.classList.contains('navigation--opened')) {
          navMain.classList.add('navigation--closed');
          navMain.classList.remove('navigation--opened');
          window.scrollLock.enableScrolling();
        }
      }
    });

    bodyElements.forEach((bodyElement) => {
      bodyElement.addEventListener('click', function () {
        if (navMain.classList.contains('navigation--opened')) {
          navMain.classList.add('navigation--closed');
          navMain.classList.remove('navigation--opened');
          window.scrollLock.enableScrolling();
        }
      });
    });
  }
};

export {showMenu};
