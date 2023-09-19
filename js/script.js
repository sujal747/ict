document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-toggle");
    const navigationMenu = document.querySelector(".header-navigation");

    menuButton.addEventListener("click", function () {
        navigationMenu.classList.toggle("open");
    });
});

function zoomIn(element) {
    element.style.animation = 'zoom 0.3s ease';
    element.style.transform = 'scale(1.1)';
}

function zoomOut(element) {
    element.style.animation = 'none';
    element.style.transform = 'scale(1)';
}
// Simulate a delay (you can replace this with actual content loading)
setTimeout(function() {
    document.querySelector('.preloader').style.display = 'none';
    // You can show your website content here
}, 3000); // Adjust the time as needed