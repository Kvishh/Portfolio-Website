document.addEventListener("DOMContentLoaded", (e)=>{
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        smooth: .8,
        effects: true,
        smoothTouch: 0.1
    });

    window.onload = ()=>{
        gsap.fromTo(".about-page-heading",  {
            opacity: 0,
            yPercent: 60
        }, {
            opacity: 1,
            yPercent: 0
        });

        const paragraphs = gsap.utils.toArray(".about-page-paragraphs-container p");
        paragraphs.forEach((p, i)=>{
            gsap.fromTo(p,  {
                opacity: 0,
                yPercent: 60
            }, {
                opacity: 1,
                yPercent: 0
            });
        })

        gsap.fromTo(".carousel-container", {
            opacity: 0,
            yPercent: 40
        }, {
            opacity: 1,
            yPercent: 0
        });
    }

    gsap.to("footer", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
            trigger: ".about-page-main-section",
            start: "bottom-=28% bottom",
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