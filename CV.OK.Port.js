const burger = document.querySelector('.burger');
const navLink = document.querySelector('nav');



burger.addEventListener('click', openMenu);

function openMenu(){
    burger.classList.toggle('active');
    navLink.classList.toggle('active');
}

