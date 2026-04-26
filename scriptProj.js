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
        }
    });

    let oldScroll = window.pageYOffset || document.documentElement.scrollTop;

    document.addEventListener("scroll", (evt)=>{
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > oldScroll) {
            const nav = document.querySelector("nav");
            let navTopPos = parseInt(window.getComputedStyle(nav).top, 10);
            let value = Math.min((navTopPos + 10), 900);
            nav.style.top = value + "px";
            
        } else if (st < oldScroll) {
            const nav = document.querySelector("nav");
            let navTopPos = parseInt(window.getComputedStyle(nav).top, 10);
            let value = Math.max((navTopPos - 10), 771);
            nav.style.top = value + "px";
        }
        oldScroll = st <= 0 ? 0 : st;
    }, false);
})
