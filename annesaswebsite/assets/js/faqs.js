document.addEventListener('DOMContentLoaded', () => {
    // Get references to all .maincontainer and .card elements
    const mainContainers = document.querySelectorAll('.maincontainer');
    const cards = document.querySelectorAll('.card');

    // Add a click event listener to each .maincontainer element
    mainContainers.forEach((mainContainer, index) => {
        mainContainer.addEventListener('click', () => {
            // Toggle the 'card-clicked' class on the corresponding .card element
            cards[index].classList.toggle('card-clicked');
        });
    });

    const mainMenu = document.querySelector('.menu');
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');

    openMenu.addEventListener('click', () => {
        mainMenu.style.display = 'flex';
        mainMenu.style.top = '0';
    });

    closeMenu.addEventListener('click', () => {
        mainMenu.style.top = '-100%';
    });
});