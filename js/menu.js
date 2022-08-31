(function (){
    const openButton = document.querySelector('.nav__menu');//Icono hamburgues

    //Obtener elemento menu (nav__link)
    const menu = document.querySelector('.nav__link');

    //Obtener elemento que cierra menu
    const closeMenu = document.querySelector('.nav__close');

    //Crear funcion de evento click
    openButton.addEventListener('click',()=>{
        //Desplega menu
        menu.classList.add('nav__link--show');
    })

    closeMenu.addEventListener('click', ()=>{
        //HAcer click en cerrar cierra menu.
        menu.classList.remove('nav__link--show');
    })
})();