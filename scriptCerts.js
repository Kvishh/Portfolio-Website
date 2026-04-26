document.addEventListener("DOMContentLoaded", (e)=>{
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        smooth: .8,
        effects: true,
        smoothTouch: 0.1
    });

    window.onload = () => {
        gsap.fromTo(".certification-header-container", {
            opacity: 0,
            yPercent: 60
        }, {
            opacity: 1,
            yPercent: 0,
        })
        
        gsap.fromTo(".cards-container", {
            opacity: 0,
            yPercent: 30
        }, {
            opacity: 1,
            yPercent: 0
        })
    }

    const card = document.querySelector(".card")
    card.addEventListener("mousemove", (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
    
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
    
        card.style.setProperty("--mouse-x", `${x}px`)
        card.style.setProperty("--mouse-y", `${y}px`)
    })

    gsap.to("footer", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
            trigger: ".certs-page-main",
            start: "bottom-=28% bottom",
            end: "+=50%",
            scrub: true,
        }
    })
});