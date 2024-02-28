// Get references to video elements
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');

// Event listener for the first video's ended event
video1.addEventListener('ended', function () {
    // Hide the first video
    video1.style.display = 'none';

    // Show the second video
    video2.style.display = 'block';

    // Play the second video
    video2.play();
});

// Event listener for the second video's ended event
video2.addEventListener('ended', function () {
    // Hide the second video
    video2.style.display = 'none';

    // Show the first video
    video1.style.display = 'block';

    // Play the first video
    video1.play();
});

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const imgBoxes = document.querySelectorAll('.img-box img');

// Loop through all images and add click event listeners
imgBoxes.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

// Close the modal when the close button is clicked
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
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