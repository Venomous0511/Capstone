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

// Get the modal and reservation button
let modal = document.getElementById('reservationModal');
let reservationBtn = document.getElementById('reservationBtn');
let closeModalBtn = document.getElementById('closeModal');

// When the user clicks the reservation button, open the modal
reservationBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});

// When the user clicks on the close button, close the modal
closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});