/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

const navLinks = document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close menu when link clicked */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});



/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop = document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
    ".skill-card, .education-card, .project-card, .certificate-card, .contact-item, .about-card"
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {

        threshold: 0.15

    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();


    if (name === "") {

        alert("Please enter your name.");

        return;

    }


    alert(
        `Thank you ${name}! Your message has been received.`
    );


    contactForm.reset();

});



/* =====================================================
   BACKGROUND VIDEO FALLBACK
===================================================== */

const bgVideo = document.getElementById("bgVideo");


bgVideo.addEventListener("error", () => {

    document.body.classList.add("video-error");

});


/* =====================================================
   IMAGE ERROR HANDLING
===================================================== */

const profileImage = document.querySelector(".profile-image");


profileImage.addEventListener("error", () => {

    profileImage.style.display = "none";

});



/* =====================================================
   PREVENT EMPTY # LINKS FROM JUMPING
===================================================== */

const emptyLinks = document.querySelectorAll('a[href="#"]');


emptyLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

    });

});



/* =====================================================
   PAGE LOAD ANIMATION
===================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});