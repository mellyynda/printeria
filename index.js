function menuButtonEffects() {
    let navBarToggle = document.getElementById('js-navbar-toggle');
    let hamburger = document.getElementById('burger');
    let x = document.getElementById('x');
    let clickCount = 0;

    console.log(hamburger);
    console.log(x);

    navBarToggle.addEventListener('click', function () {
        clickCount++;
        if (clickCount % 2 == 0) {
            hamburger.style.display = 'block';
            x.style.display = 'none';

        } else {
            hamburger.style.display = 'none';
            x.style.display = 'block';
        }
    });
};

function openMobileNav() {
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {

        mainNav.classList.toggle('active');
    });
};

menuButtonEffects();
openMobileNav();