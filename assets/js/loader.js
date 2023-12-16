const loader = document.getElementById("preloader");

window.onload = function () {
    loader.style.opacity = "0";

    loader.addEventListener("transitionend", function () {
        loader.style.display = "none";
    });
};

const goToTopBtn = document.getElementById("gotoTop");

// Show or hide the button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
        goToTopBtn.style.display = "block";
    } else {
        goToTopBtn.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
goToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});