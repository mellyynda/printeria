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

         mainNav.classList.toggle('active-nav');
     });
 };

 menuButtonEffects();
 openMobileNav();

 //  let positionOfferCards = function () {
 //      let cardsContainer = document.querySelector('.offers');

 //      let screenWidth = window.innerWidth;


 //      if (screenWidth == 800 || screenWidth >= 1200) {
 //          cardsContainer.style.marginTop = "0";
 //      } else cardsContainer.style.marginTop = "50px";
 //  }

 //  positionOfferCards();

 let slideIndex = 1;
 showSlides(slideIndex);

 // Next/previous controls
 function plusSlides(n) {
     showSlides(slideIndex += n);
 }

 // Thumbnail image controls
 function currentSlide(n) {
     showSlides(slideIndex = n);
 }

 function showSlides(n) {
     let i;
     let slides = document.getElementsByClassName("mySlides");
     let dots = document.getElementsByClassName("dot");
     if (n > slides.length) {
         slideIndex = 1
     }
     if (n < 1) {
         slideIndex = slides.length
     }
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" on-dot", "");
     }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " on-dot";
 }