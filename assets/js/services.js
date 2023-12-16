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

// Get close buttons
const closeModal1 = document.getElementById('closeModal1');
const closeModal2 = document.getElementById('closeModal2');

// Get reservation buttons
const reservationBtn1 = document.getElementById('sunBtn');
const reservationBtn2 = document.getElementById('moonBtn');

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

// Event listeners to close modals
closeModal1.addEventListener('click', () => closeModal(modal1));
closeModal2.addEventListener('click', () => closeModal(modal2));

// Event listener to close modals when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal1) {
        closeModal(modal1);
    }
    if (event.target === modal2) {
        closeModal(modal2);
    }
});