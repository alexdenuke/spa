let open = document.querySelector('.burger');
let menu = document.querySelector('.burger-main');
let close = document.querySelector('.burger-close')

open.addEventListener('click', function () {
   menu.style.top = 0 + "vh";
   document.body.style.overflow = 'hidden';  
})

close.addEventListener('click', function () {
    menu.style.top = -100 + "vh"; 
    document.body.style.overflow = 'visible';
 })