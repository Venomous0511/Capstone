document.getElementById('video1').addEventListener('ended', function () {
    // Hide the first video
    document.getElementById('video1').style.display = 'none';

    // Show the second video
    document.getElementById('video2').style.display = 'block';

    // Play the second video
    document.getElementById('video2').play();
});

// Event listener for the second video's ended event
document.getElementById('video2').addEventListener('ended', function () {
    // Play the first video
    document.getElementById('video1').play();
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