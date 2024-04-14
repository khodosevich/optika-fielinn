document.addEventListener('DOMContentLoaded', function() {
    const burgerMenuBtn = document.getElementById('burger-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const search = document.querySelector('.search');

    burgerMenuBtn.addEventListener('click', function() {
        burgerMenuBtn.classList.toggle('open');
        navMenu.classList.toggle('open');
        search.classList.toggle('open');
    });
});