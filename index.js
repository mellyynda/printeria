function menuButtonEffects() {
    var navBarToggle = document.getElementById('js-navbar-toggle');
    var clickCount = 0;


    navBarToggle.addEventListener('click', function () {
        clickCount++;
        if (clickCount % 2 == 0) {
            navBarToggle.innerHTML = '&#9776;';
        } else {
            navBarToggle.innerHTML = '&#10006;';
        }
    });
};

function openMobileNav() {
    var mainNav = document.getElementById('js-menu');
    var navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {

        mainNav.classList.toggle('active');
    });
};

menuButtonEffects();
openMobileNav();