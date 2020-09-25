 //changes toggle from x to hamburger and back

 let mainNav = document.getElementById('js-menu');

 function menuButtonEffects() {
     let navBarToggle = document.getElementById('js-navbar-toggle');
     let hamburger = document.getElementById('burger');
     let x = document.getElementById('x');
     let clickCount = 0;

     if (window.innerWidth < 1020) {
         window.addEventListener('scroll', function makeNavFixed() {
             if (window.pageYOffset != 0) {
                 navBarToggle.classList.add("fixed-toggle");
                 mainNav.classList.add("fixed-active-nav");
             } else {
                 navBarToggle.classList.remove("fixed-toggle");
                 mainNav.classList.remove("fixed-active-nav");
             }
         });
     };

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



 //  margin top resize function 
 // let positionOfferCards = function () {
 //      let cardsContainer = document.querySelector('.offers');
 //      let cards = document.querySelectorAll('.card');
 //      let screenWidth = window.innerWidth;
 //      console.log(cardsContainer);
 //      console.log(cards);
 //      console.log(screenWidth);

 //      if (screenWidth = 800) {
 //          cardsContainer.style.marginTop = "0";
 //      } else cardsContainer.style.marginTop = "50px";
 //  }

 //  positionOfferCards();

 // opens main nav
 function openMobileNav() {

     let navBarToggle = document.getElementById('js-navbar-toggle');

     navBarToggle.addEventListener('click', function () {

         mainNav.classList.toggle('active');
     });
 };

 menuButtonEffects();
 openMobileNav();



 //  function that gets carousell going from: https://www.w3schools.com/howto/howto_js_slideshow.asp

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


 //function that makes cover height as big as screen
 let makeCoverFull = function () {
     let nav = document.getElementsByTagName('header');
     console.log(nav);
     let navHeight = nav[0].offsetHeight;
     console.log(navHeight);

     let cover = document.querySelector('.cover');
     console.log(cover);

     // found this solution to change viewport height to pixels: https://stackoverflow.com/questions/44109314/javascript-calculate-with-viewport-width-height/44109531
     function vh(v) {
         var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
         return (v * h) / 100;
     }
     console.log(vh(100));

     cover.style.height = ` ${vh(100) - navHeight}px`

 }
 makeCoverFull();