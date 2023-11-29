const loader = document.getElementById("preloader");

window.onload = function () {
    loader.style.opacity = "0";

    loader.addEventListener("transitionend", function () {
        loader.style.display = "none";
    });
};