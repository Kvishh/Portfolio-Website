document.addEventListener("DOMContentLoaded", (e)=>{
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    window.onload = () => {
        gsap.fromTo(".project-page-heading", {
            opacity: 0,
            yPercent: 60
        }, {
            opacity: 1,
            yPercent: 0,
        })
        
        const gridItems = gsap.utils.toArray(".grid-item");
        gridItems.forEach((item, i )=> {
            gsap.fromTo(item, {
                opacity: 0,
                yPercent: 60
            }, {
                opacity: 1,
                yPercent: 0
            })
        });
    }
    
    ScrollSmoother.create({
        smooth: .8,
        effects: true,
        smoothTouch: 0.1
    });

    gsap.to("footer", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
            trigger: ".project-page-main",
            start: "bottom-=18% bottom",
            end: "+=50%",
            scrub: true,
            markers: true
        }
    })
})
