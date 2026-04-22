document.addEventListener("DOMContentLoaded", (e)=>{
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
})

const bg_images = ["preview_2.png", "preview_3.png",  "preview_4.png", "preview_5.png", "preview_6.png", "preview_7.png"]
let index = 0

function change_bg_image(){
    index = (index + 1) % bg_images.length
    document.querySelector("#background-image-holder").style.backgroundImage = `url(assets/images/${bg_images[index]})`;
}

const carouselContainer = document.querySelector(".carousel-container")
carouselContainer.addEventListener("mousemove", (e)=>{
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    carouselContainer.style.setProperty("--mouse-x", `${x}px`)
    carouselContainer.style.setProperty("--mouse-y", `${y}px`)
})

const card = document.querySelector(".card")
card.addEventListener("mousemove", (e)=>{
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    card.style.setProperty("--mouse-x", `${x}px`)
    card.style.setProperty("--mouse-y", `${y}px`)
})

setInterval(change_bg_image, 4000)


gsap.to(".game-landing-section", {
    scrollTrigger: {
        trigger: ".game-landing-section",
        start: "bottom+=50px bottom",
        end: "bottom top-=70px",
        pin: true,
        pinSpacing: false
    },
})

ScrollSmoother.create({
	smooth: .8,
	effects: true,
	smoothTouch: 0.1
});


ScrollTrigger.create({
    trigger: ".projects-header-container",
    start: "top-=10 top",
    end: "bottom+=2240 bottom",
    pin: true
})

const cardWrappers = gsap.utils.toArray(".project-card-wrapper")
const cards = gsap.utils.toArray(".project-card-container")

cardWrappers.forEach((wrapper, i) => {
    const card = cards[i];
    
    const scale = .9 + .03 * i

    gsap.to(card, {
        scale: scale,
        scrollTrigger: {
            trigger: wrapper,
            start: "top " + (80 + 50 * i),
            end: "bottom+=20 800",
            endTrigger: ".projects-cards-container",
            pin: wrapper,
            invalidateOnRefresh: true,
            scrub: true,
        }
    });
});