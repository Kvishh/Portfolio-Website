gsap.registerPlugin(ScrollTrigger);

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
