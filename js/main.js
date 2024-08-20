// SELECTING ELEMENTS

const mobileMenuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

// FUNCTIONS

function toggleNavMenu() {
    navMenu.classList.toggle("active");
}

function removeActiveClass() {
    navMenu.classList.remove("active");
}

// ADDING EVENT LISTENERS

mobileMenuBtn.addEventListener("click", toggleNavMenu);

window.addEventListener("resize", function () {
    if (window.innerWidth >= 675) {
        removeActiveClass();
    }
});
