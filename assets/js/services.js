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

// Get modal elements
const modal1 = document.getElementById('reservationModal1');
const modal2 = document.getElementById('reservationModal2');
const modal3 = document.getElementById('reservationModal3');

// Get close buttons
const closeModal1 = document.getElementById('closeModal1');
const closeModal2 = document.getElementById('closeModal2');
const closeModal3 = document.getElementById('closeModal3');

// Get reservation buttons
const reservationBtn1 = document.getElementById('reservationBtn1');
const reservationBtn2 = document.querySelector('.sun');
const reservationBtn3 = document.querySelector('.moon');

// Function to open modal
function openModal(modal) {
    modal.style.display = 'block';
}

// Function to close modal
function closeModal(modal) {
    modal.style.display = 'none';
}

// Event listeners to open modals
reservationBtn1.addEventListener('click', () => openModal(modal1));
reservationBtn2.addEventListener('click', () => openModal(modal2));
reservationBtn3.addEventListener('click', () => openModal(modal3));

// Event listeners to close modals
closeModal1.addEventListener('click', () => closeModal(modal1));
closeModal2.addEventListener('click', () => closeModal(modal2));
closeModal3.addEventListener('click', () => closeModal(modal3));

// Event listener to close modals when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal1) {
        closeModal(modal1);
    }
    if (event.target === modal2) {
        closeModal(modal2);
    }
    if (event.target === modal3) {
        closeModal(modal3);
    }
});