function locomotiveanimation() {
    gsap.registerPlugin(ScrollTrigger); // ✦ Register ScrollTrigger plugin from GSAP

    const locoScroll = new LocomotiveScroll({ // ✦ Initialize LocomotiveScroll
        el: document.querySelector("#main"), // ✦ Scrolling container
        smooth: true // ✦ Enable smooth scrolling
    });

    locoScroll.on("scroll", ScrollTrigger.update); // ✦ Sync scroll position with ScrollTrigger

    ScrollTrigger.scrollerProxy("#main", { // ✦ Let ScrollTrigger use #main as its scroll source
        scrollTop(value) { return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y }, // ✦ Get/set scroll position
        getBoundingClientRect() { return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight } }, // ✦ Return full window size
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed" // ✦ Use 'transform' if active, else use 'fixed'
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update()); // ✦ Update LocomotiveScroll when ScrollTrigger refreshes
    ScrollTrigger.refresh(); // ✦ Force ScrollTrigger to refresh layout
}
locomotiveanimation(); // ✦ Call the scroll setup

gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)", // ✦ Slide nav SVG up
    scrollTrigger: {
        trigger: "#page1", // ✦ Trigger animation when #page1 scrolls
        scroller: "#main", // ✦ Use #main as scroller
        start: "top 0", // ✦ Start when #page1 reaches top
        end: "top -5%", // ✦ End just before it's fully gone
        scrub: true // ✦ Smooth scroll sync
    }
});
gsap.to("#nav-part2 #links", {
    y: -100, // ✦ Slide links up
    opacity: 0, // ✦ Fade out
    scrollTrigger: {
        trigger: "#page1", // ✦ Trigger on #page1 scroll
        scroller: "#main", // ✦ Use #main as scroller
        start: "top 0", // ✦ Start at top
        end: "top -5%", // ✦ End slightly above top
        scrub: 2, // ✦ Slower scroll sync
    }
});

function navbaranimation() {
    gsap.to("#nav-part1 svg", {
        transform: "translateY(-100%)", // ✦ Move nav SVG up
        scrollTrigger: {
            trigger: "#page1", // ✦ Trigger when #page1 scrolls
            scroller: "#main", // ✦ Use #main as scroll container
            start: "top 0", // ✦ Start at top
            end: "top -5%", // ✦ End just above top
            scrub: true // ✦ Smooth sync
        }
    });
    gsap.to("#nav-part2 #links", {
        y: -100, // ✦ Move links up
        opacity: 0, // ✦ Fade them out
        scrollTrigger: {
            trigger: "#page1", // ✦ Trigger on #page1 scroll
            scroller: "#main", // ✦ Use #main as scroller
            start: "top 0", // ✦ Start when top hits
            end: "top -5%", // ✦ End slightly above
            scrub: 2, // ✦ Slower animation
        }
    });
}
navbaranimation(); // ✦ Run the navbar animation

var videocon = document.querySelector("#video-container"); // ✦ Get the video container
var playbtn = document.querySelector("#play"); // ✦ Get the play button
var logo = document.querySelector("#logo"); // ✦ Get the logo inside container

videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
         scale: 1, opacity: 1 
        }); // ✦ Show play button on hover
});

videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, { 
        scale: 0, opacity: 0
     }); // ✦ Hide play button on leave
});

videocon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
         left: dets.x - 40, top: dets.y - 40
        
        }); // ✦ Move play button with mouse
    gsap.to(logo, { left: dets.x - 25, top: dets.y - 25 }); // ✦ Move logo with mouse
});

gsap.from("#page1 h1", {
    y: 100, // ✦ Start 100px below
    opacity: 0, // ✦ Start fully transparent
    duration: 1, // ✦ Animate in 1 sec
    ease: "power3.out", // ✦ Easing for smooth entrance
    delay: 0.5 // ✦ Delay animation
});

gsap.from("#page1 #video-container", {
    scale: 0.9, // ✦ Slightly zoomed out
    opacity: 0, // ✦ Start invisible
    delay: 1.3, // ✦ Delay after heading
    duration: 0.5 // ✦ Quick transition
});

document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
        left: dets.x, top: dets.y // ✦ Move custom cursor to mouse
    });
});

var children = document.querySelectorAll(".child"); // ✦ Select all .child elements

children.forEach(function (child) {
    child.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
             scale: 1, opacity: 1 
            }); // ✦ Show cursor on hover
    });
    child.addEventListener("mouseleave", function () 
    {
        gsap.to("#cursor", {
             scale: 0 
            }); // ✦ Hide cursor when leaving
    });
});