$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
                $('.navbar').addClass("sticky");
        }else{
                $('.navbar').removeClass("sticky");
        }
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});

    // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["CMD'er", "Intern / Stagiaire", "Designer", "Interaction Designer", "user experience designer", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
    });

    //typing animation script
    var typed = new Typed(".typing-2", {
        strings: ["CMD'er", "Designer", "Interaction Designer", "user experience designer", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
});
//project carousel script
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides =slides.length;

document.
getElementById('carousel_button--next')
.addEventListener("click", function() {
    moveToNextSlide();
});

document.
getElementById('carousel_button--prev')
.addEventListener("click", function() {
    moveToPrevSlide();
});
function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel_item--visible');
        slide.classList.add('carousel_item--hidden');
    }

    slides[slidePosition].classList.add('carousel_item--visible');
}

function moveToNextSlide() {
    if (slidePosition == totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition == 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}
