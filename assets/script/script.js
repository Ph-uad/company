
let tl = gsap.timeline();
tl.from('.heading-jumbo', {opacity: 0, scale: 0.1 , duration:1.7,ease:"power2"});
tl.from('.header-subtext', {opacity: 0 ,x: -20, duration:1,ease:"power2"});
tl.from('.button', {opacity: 0 ,y: 100, ease:"sine"});
