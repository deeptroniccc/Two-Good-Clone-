function locomotiveanimation() {
    gsap.registerPlugin(ScrollTrigger); // ✦ Register ScrollTrigger plugin from GSAP

    const locoScroll = new LocomotiveScroll({ // ✦ Initialize LocomotiveScroll
        el: document.querySelector("#main"), // ✦ Scrolling container
        smooth: true, // ✦ Enable smooth scrolling
        smartphone: { smooth: true },
        tablet: { smooth: true }
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

function showPlayBtn() {
    gsap.to(playbtn, { scale: 1, opacity: 1 });
}
function hidePlayBtn() {
    gsap.to(playbtn, { scale: 0, opacity: 0 });
}
function movePlayBtnLogo(x, y) {
    gsap.to(playbtn, { left: x - 40, top: y - 40 });
    gsap.to(logo, { left: x - 25, top: y - 25 });
}

if (window.innerWidth > 800) {
    videocon.addEventListener("mouseenter", showPlayBtn);
    videocon.addEventListener("mouseleave", hidePlayBtn);
    videocon.addEventListener("mousemove", function (dets) {
        movePlayBtnLogo(dets.x, dets.y);
    });
} else {
    // Touch support for mobile
    videocon.addEventListener("touchstart", function (e) {
        showPlayBtn();
        var touch = e.touches[0];
        movePlayBtnLogo(touch.clientX, touch.clientY);
    });
    videocon.addEventListener("touchmove", function (e) {
        var touch = e.touches[0];
        movePlayBtnLogo(touch.clientX, touch.clientY);
    });
    videocon.addEventListener("touchend", hidePlayBtn);
}

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

if (window.innerWidth > 800) {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x, top: dets.y // ✦ Move custom cursor to mouse
        });
    });
    document.querySelector("#cursor").style.display = "block";
} else {
    document.querySelector("#cursor").style.display = "none";
}

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