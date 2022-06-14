let open = document.querySelector(".burger-open");
let menu = document.querySelector(".burger");
let wrap = document.querySelector(".header__button-wrap");
let header = document.querySelector('.header__nav-wrap');
let computedStyle = getComputedStyle(header);
let height = computedStyle.height;
let img = document.createElement("img");
img.src = "/img/burger-close.svg";
img.classList.add("burger-close");
let close = img;

open.addEventListener("click", function () {
  menu.style.top = `calc(0vh + ${height})`;
  open.remove();
  wrap.after(img);
  // close.style.display = "block";
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", function () {
  menu.style.top = "-100vh";
  close.remove();
  wrap.after(open);  
  document.body.style.overflow = "visible";
});
