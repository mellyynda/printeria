 //console log in one letter
 function l(param) {
     console.log(param);
 }


 //  reload page on resize to avoid bad layout-doesn't work, kills my layout
 //  window.addEventListener('resize', function () {
 //      "use strict";
 //      window.location.reload();
 //  });


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

 //add content to valid inputs
 //  let addCheckedMark = () => {
 //      //create an array to store all valid inputs
 //      let fields = document.querySelectorAll('.contact form input');
 //      l(fields);
 //      let messageField = document.querySelector('#message');
 //      l(messageField);

 //      //select elements with valid inputs using css :valid pseudoclass
 //      //  let validName = document.querySelector('input[type="text"]:valid');
 //      //  let validEmail = document.querySelector('input[type="email"]:valid');
 //      //  let validTel = document.querySelector('input[type="text"]:valid');
 //      //  let validMessage = document.querySelector('.contact form textarea:valid');


 //      //push all elements in the array
 //      //  fields.push(validName);
 //      //  fields.push(validEmail);
 //      //  fields.push(validTel);
 //      //  fields.push(validMessage);

 //      fields.forEach(field => {
 //          field.textContent.innerHTML += '&#10003;';
 //      });
 //  }
 //  addCheckedMark();




 //=========================================================================================
 // Form functions
 //=========================================================================================

 //declaring form fields on a global scope
 let name = document.getElementById('name');
 console.log(name);

 let email = document.querySelector('#contact > form > label:nth-child(4) > input[type=email]');
 console.log(email);

 let tel = document.querySelector('#contact > form > label:nth-child(5) > input[type=tel]');
 console.log(tel);

 let message = document.getElementById('message');
 console.log(message);

 let form = document.getElementById('contact-form');

 //set all input elements equal to nothing
 let resetForm = function () {
     name.value = '';
     email.value = '';
     tel.value = '';
     message.value = '';
     name.style.borderColor = null;
     email.style.borderColor = null;
     tel.style.borderColor = null;
     message.style.borderColor = null;
 }

 // create a DOM element response for submitting the form
 form.addEventListener('submit', e => {

     e.preventDefault();

     let parent = document.querySelector('.submit-response');
     console.log(parent);

     let tag = document.createElement('p');
     console.log(tag);

     let text = document.createTextNode(`*Thank you ${name.value} for your message. Your concerns are important for us. We will answer within 5 working days.`)
     console.log(text);

     tag.appendChild(text);
     console.log(tag);

     parent.appendChild(tag);

     parent.style.padding = "20px";
     parent.scrollIntoView();
     resetForm();
     //  form.reset();
 });



 // creats red bottom border to inputs field if what you enter in not valid still need to make it go back to default when the form is deselected
 let invalidStyle = function () {
     let fields = document.querySelectorAll('.contact form input');
     l(fields);
     let text = document.querySelector('#message');

     fields.forEach(field => {
         field.addEventListener("input", function () {

             if (field.value.trim()) {
                 if (!field.checkValidity()) {
                     field.style.borderColor = "red";
                 } else field.style.borderColor = "green";
             } else field.style.borderColor = null;
         })
     })
     text.addEventListener("input", function () {
         if (text.value.trim()) {
             if (!text.checkValidity()) {
                 text.style.borderColor = "red";
             } else text.style.borderColor = "green";
         } else text.style.borderColor = null;
     })
 }
 invalidStyle();