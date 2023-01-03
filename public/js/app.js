let isLight = false;
const app = {
  init: () => {
    app.toggleColorMod();
  },

  toggleColorMod: () => {
    // Body element
    const btn = document.getElementById("btn-mode");

    // Navside element
    const navside = document.querySelectorAll(".navSide__picto__svg");

    //Header element
    const headerLogo = document.querySelector(".header__logo__svg");

    // projet element
    const projectOverview = document.querySelectorAll(
      ".projectOverview__container__next__link__svg"
    );

    //oneProjectPage element
    const projectPageWebsite = document.querySelectorAll(
      ".projectHeader__link__website__svg"
    );
    const projectPageGitHub = document.querySelectorAll(
      ".projectHeader__link__github__svg"
    );
    const projectPageBack = document.querySelectorAll(".inconBack__svg");

    btn.addEventListener("click", () => {
      isLight = !isLight;
      // CHanger dans le body
      document.body.classList.toggle("light-mode-body");

      //changer dans la navside
      navside.forEach((item) => {
        item.classList.toggle("light-mode-svg");
      });

      //changer dans le header
      headerLogo.classList.toggle("light-mode-svg");

      // Changer dans la page projetOverview
      projectOverview.forEach((item) => {
        item.classList.toggle("light-mode-svg");
      });

      // CHanger dans la page projet
      projectPageWebsite.forEach((item) => {
        item.classList.toggle("light-mode-svg");
      });
      projectPageGitHub.forEach((item) => {
        item.classList.toggle("light-mode-svg");
      });

      projectPageBack.forEach((item) => {
        item.classList.toggle("light-mode-svg");
      });
    });
  },
};

document.addEventListener("DOMContentLoaded", app.init());
