
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

// Mobile navigation
menuToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after clicking a navigation link
navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Rotating text in the homepage introduction
const typingText = document.getElementById("typingText");

const phrases = [
    "web experiences.",
    "data-driven ideas.",
    "useful projects.",
    "creative solutions."
];

let phraseIndex = 0;

function changePhrase() {
    typingText.style.opacity = "0";

    setTimeout(() => {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingText.textContent = phrases[phraseIndex];
        typingText.style.opacity = "1";
    }, 250);
}

typingText.style.transition = "opacity 0.25s ease";

setInterval(changePhrase, 2500);

// Reveal content smoothly as sections enter the screen
const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .skill-card, .project-card, .timeline-item"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach((element) => {
        element.classList.add("reveal");
        observer.observe(element);
    });
}
