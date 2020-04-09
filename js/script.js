const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const portfolio = document.querySelector("#portfolio");
const contact = document.querySelector("#contact");
const name = document.querySelector("#ref");

const tl = new TimelineMax();

tl.fromTo(
    hero, 2, 
    {width: "50%"}, 
    {width:"100%", ease: Power2.easeInOut}
    );

tl.fromTo(
    hero, 1.2, 
    {height: "50%"}, 
    {height:"100%", ease: Power2.easeInOut}
    );

tl.fromTo(
    slider, 1,
    {x: "-100%"},
    {x: "0%", ease: Power2.easeInOut},
    "-=1.2"
);