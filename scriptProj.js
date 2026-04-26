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
    });

    let oldScroll = window.pageYOffset || document.documentElement.scrollTop;

    document.addEventListener("scroll", (evt)=>{
        let st = window.pageYOffset || document.documentElement.scrollTop;
        const vieportHeight = window.innerHeight;

        if (st > oldScroll) {
            const nav = document.querySelector("nav"); // down
            const topPx = nav.offsetTop;
            const topPercent = (topPx / vieportHeight) * 100;
            const value = Math.min((topPercent + 1), 105);
            nav.style.top = value + "%";
            
        } else if (st < oldScroll) {
            const nav = document.querySelector("nav"); // up
            const topPx = nav.offsetTop;
            const topPercent = (topPx / vieportHeight) * 100;
            const value = Math.max((topPercent - 1), 90);
            nav.style.top = value + "%";
        }
        oldScroll = st <= 0 ? 0 : st;
    }, false);
})
