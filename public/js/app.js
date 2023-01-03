const app = {

    init: () => {
    app.toggleColorMod()
    },

    toggleColorMod :() => {
        const btn = document.getElementById('btn-mode');
         btn.addEventListener('click', () => {
            console.log("je fonctionne")});    
    }
}

document.addEventListener('DOMContentLoaded', app.init());