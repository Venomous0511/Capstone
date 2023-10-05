const mainMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}

let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Number of slides per view
    loop: true, // Enable loop mode
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 18,
        shadowScale: 0.94,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
    },
});