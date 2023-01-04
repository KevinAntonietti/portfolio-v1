let isLight = false;

const app = {
  btn: document.getElementById("btn-mode"),

  // Navside element
  navside: document.querySelectorAll(".navSide__picto__svg"),

  //Header element
  headerLogo: document.querySelector(".header__logo__svg"),

  // projet element
  projectOverview: document.querySelectorAll(
    ".projectOverview__container__next__link__svg"
  ),

  //oneProjectPage element
  projectPageWebsite: document.querySelectorAll(
    ".projectHeader__link__website__svg"
  ),
  projectPageGitHub: document.querySelectorAll(
    ".projectHeader__link__github__svg"
  ),
  projectPageBack: document.querySelectorAll(".inconBack__svg"),

  init: () => {
    const savedIsLight = localStorage.getItem('isLight');
    if (savedIsLight !== null) {
      isLight = savedIsLight === 'true';
      app.setLightMode(isLight);
    }
    app.toggleColorMod();
  },

  toggleColorMod: () => {
    app.btn.addEventListener("click", () => {
      isLight = !isLight;
      app.setLightMode(isLight);
      localStorage.setItem('isLight', isLight);
    });
  },

  setLightMode: (isLight) => {
    // CHanger dans le body
    document.body.classList.toggle("light-mode-body",isLight);

    //changer dans la navside
    app.navside.forEach((item) => {
      item.classList.toggle("light-mode-svg",isLight);
    });

    //changer dans le header
    app.headerLogo.classList.toggle("light-mode-svg",isLight);

    // Changer dans la page projetOverview
    app.projectOverview.forEach((item) => {
      item.classList.toggle("light-mode-svg",isLight);
    });

    // CHanger dans la page projet
    app.projectPageWebsite.forEach((item) => {
      item.classList.toggle("light-mode-svg",isLight);
    });
    app.projectPageGitHub.forEach((item) => {
      item.classList.toggle("light-mode-svg",isLight);
    });

    app.projectPageBack.forEach((item) => {
      item.classList.toggle("light-mode-svg",!isLight);
    });
  },
};

document.addEventListener("DOMContentLoaded", app.init());
