 function menuButtonEffects() {
     let navBarToggle = document.getElementById('js-navbar-toggle');
     let hamburger = document.getElementById('burger');
     let x = document.getElementById('x');
     let clickCount = 0;

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

 let positionOfferCards = function () {
     let cardsContainer = document.querySelector('.offers');
     let cards = document.querySelectorAll('.card');
     let screenWidth = window.innerWidth;


     if (screenWidth == 800 || screenWidth >= 1200) {
         cardsContainer.style.marginTop = "0";
     } else cardsContainer.style.marginTop = "50px";
 }

 positionOfferCards();