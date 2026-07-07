// ===========================
// Mobile Menu
// ===========================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// ===========================
// Smooth Scroll
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===========================
// Navbar Shadow on Scroll
// ===========================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
        navbar.style.background = "rgba(255,255,255,0.98)";
    } else {
        navbar.style.boxShadow = "none";
        navbar.style.background = "rgba(255,255,255,0.95)";
    }
});

// ===========================
// Skill Bar Animation
// ===========================
const skillBars = document.querySelectorAll(".skill-progress");

const animateSkills = () => {
    skillBars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
    });
};

const skillSection = document.querySelector("#skills");

window.addEventListener("scroll", () => {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        animateSkills();
    }
});

// ===========================
// Active Navigation
// ===========================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ===========================
// Contact Form
// ===========================
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("✅ Thank you! Your message has been sent successfully.");

    form.reset();
});

// ===========================
// Scroll Reveal Animation
// ===========================
const revealElements = document.querySelectorAll(
    ".about-content, .project-card, .contact-item, .skill-category"
);

const reveal = () => {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);