let isLight = false;

const colorMode = {

  // Btn
  btn: document.getElementById("btn-mode"),

  //Btn SVG
  btnOn : document.querySelector(".header__lightMode__on__svg"),
  btnOff : document.querySelector(".header__lightMode__off__svg"),

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
      colorMode.setLightMode(isLight);
    }
    colorMode.toggleColorMod();
  },

  toggleColorMod: () => {
    colorMode.btn.addEventListener("click", () => {
      isLight = !isLight;
      colorMode.setLightMode(isLight);
      localStorage.setItem('isLight', isLight);
    });
  },

  setLightMode: (isLight) => {

    if (isLight===true) {
      colorMode.btnOn.classList.add("onOff")
      colorMode.btnOff.classList.remove("onOff")
      
    }
    else {
      colorMode.btnOn.classList.remove("onOff")
      colorMode.btnOff.classList.add("onOff")
    }


    // CHanger dans le body
    document.body.classList.toggle("light-mode-body",isLight);

    //changer dans la navside
    colorMode.navside.forEach((item) => {
      item.classList.toggle("light-mode-svg",isLight);
    });

    //changer dans le header
    colorMode.headerLogo.classList.toggle("light-mode-svg",isLight);

    // Changer dans la page projetOverview
    colorMode.projectOverview.forEach((item) => {
      item.classList.toggle("light-mode-svg",isLight);
    });

    // CHanger dans la page projet
    colorMode.projectPageWebsite.forEach((item) => {
      item.classList.toggle("light-mode-svg",isLight);
    });
    colorMode.projectPageGitHub.forEach((item) => {
      item.classList.toggle("light-mode-svg",isLight);
    });

    colorMode.projectPageBack.forEach((item) => {
      item.classList.toggle("light-mode-svg",isLight);
    });
  },
};

document.addEventListener("DOMContentLoaded", colorMode.init());
