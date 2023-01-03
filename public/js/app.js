let isDark = false;
const app = {

    init: () => {
    app.toggleColorMod()
    },

    toggleColorMod :() => {
        const btn = document.getElementById('btn-mode');

        // Navside element
        const navside = document.querySelectorAll(".navSide__picto__svg")
        const navsideLine= document.querySelector(".navSide__line")
        console.log(navsideLine);
       
        //Header element
        const logoHeader = document
       
          btn.addEventListener('click', () => {
            isDark = !isDark;
            // CHanger dans le body
            document.body.classList.toggle('light-mode-body');

            //changer dans la navside
            navside.forEach(item => {item.classList.toggle('light-mode-svg');
            })
            navsideLine.classList.toggle('light-mode-line')
        });    
    }
}

document.addEventListener('DOMContentLoaded', app.init());