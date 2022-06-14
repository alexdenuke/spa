let open = document.querySelector('.burger-open');
let menu = document.querySelector('.burger-main');
let close = document.querySelector('.burger-close')

open.addEventListener('click', function () {
   menu.style.top =  "calc(0vh + 120px)";
   open.style.display = "none";
   close.style.display = "block";
   document.body.style.overflow = 'hidden';  
})

close.addEventListener('click', function () {
    menu.style.top = "-100vh";
    close.style.display = "none";
    open.style.display = "block";
    document.body.style.overflow = 'visible';
 })