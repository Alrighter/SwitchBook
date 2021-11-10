(function (){
    const burgerItem = document.querySelector('.burger_menu');
    const menu = document.querySelector('.footer_nav');
    const closeMenu = document.querySelector('.shade_to_close_menu');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('footer_nav_active');
        closeMenu.classList.add('shade_to_close_menu_active');
    })
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('footer_nav_active');
        closeMenu.classList.remove('shade_to_close_menu_active');
    })

}())