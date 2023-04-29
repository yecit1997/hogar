 const barraMenu = document.querySelector('.barra-menu');
 const menu = document.querySelector('.menu-navegacion');


 barraMenu.addEventListener('click',()=>{
    menu.classList.toggle("spread");
 })

 window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != barraMenu ){
        menu.classList.toggle("spread");
    }
 })