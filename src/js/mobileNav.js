const hamburger = document.getElementById("hamburgerIcon");
const close = document.getElementById("closeIcon");
const mobileNav = document.getElementsByClassName('nav--mobile')[0];
hamburger.addEventListener('click', () => {
    mobileNav.style.display = "flex";
});
close.addEventListener('click', () => {
    mobileNav.style.display = "none";
});