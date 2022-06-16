//animation
let tl = gsap.timeline();
tl.from('.button', {duration:2, y: 1000,opacity: 0,ease: "circ.out"});


const videos =  document.querySelectorAll('.media-container__video');
const buttonPrevious = document.querySelector('.media-icon__left');
const buttonNext = document.querySelector('.media-icon__right');
let currentSlide  = 0;

gsap.registerPlugin(ScrollTrigger)
gsap.to(".header-text" , {
    scrollTrigger : {
        trigger: ".header-text",
        start : "top top",
        pin: true,
        scrub: 4,
        nmarkers: true,
        endTrigger : ".header",
        end: "bottom +=520"
     },
})

gsap.to(".header-gallery" , {
    scrollTrigger : {
        trigger: ".header-gallery",
        start : "top center",
        scrub : 3,
        end: "bottom +=400"
     },
     y: 70
})

gsap.from(".objective" , {
    scrollTrigger : {
        trigger: ".objective",
        start : "top center",
        end: "-=200",
     },
     opacity: 0,
     x: -200
        })

// Wrap every letter in a span
var textWrapper = document.querySelectorAll('.ml3');

textWrapper.forEach(text => {
    text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});


anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 20,
    delay: (el, i) => 50 * (i+1)
  })



  ///Carousel
const slide = ( ) =>{
    videos.forEach((block, index) => {
        block.style.transform = `translateX(${120 * (index - currentSlide)}%)`; 
    });
}

slide()


buttonPrevious.addEventListener('click',()=>{
   currentSlide === 0 ? currentSlide  = videos.length -1 : currentSlide--;
   slide();
})

buttonNext.addEventListener('click',()=>{
    currentSlide === videos.length -1 ? currentSlide = 0 : currentSlide++;
    slide();
})