/* =========================================
   LOVE WEBSITE
========================================= */


/* =========================================
   OPEN WEBSITE
========================================= */

function openWebsite() {

    const opening = document.getElementById("opening");
    const mainContent = document.getElementById("main-content");
    const loading = document.getElementById("loading");

    opening.style.opacity = "0";
    opening.style.transform = "scale(1.05)";
    opening.style.transition = "1s ease";

    setTimeout(() => {

        opening.style.display = "none";
        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        document.body.classList.remove("no-scroll");

    }, 800);
}


/* =========================================
   LOADING SCREEN
========================================= */

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    setTimeout(() => {

        loading.style.opacity = "0";

        setTimeout(() => {
            loading.style.display = "none";
        }, 800);

    }, 1200);

});


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {

    const container = document.getElementById("heart-container");

    if (!container) return;

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "%";

    const size = Math.random() * 20 + 10;

    heart.style.fontSize = size + "px";

    const duration = Math.random() * 6 + 6;

    heart.style.animationDuration = duration + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 800);


/* =========================================
   LETTER
========================================= */

function openLetter() {

    const envelope = document.getElementById("envelope");

    if (!envelope) return;

    envelope.classList.toggle("open");

}


/* =========================================
   SURPRISE
========================================= */

function showSurprise() {

    const modal = document.getElementById("surpriseModal");

    if (!modal) return;

    modal.classList.add("active");

    document.body.classList.add("no-scroll");

    createExplosion();

}


/* =========================================
   CLOSE SURPRISE
========================================= */

function closeSurprise() {

    const modal = document.getElementById("surpriseModal");

    if (!modal) return;

    modal.classList.remove("active");

    document.body.classList.remove("no-scroll");

}


/* =========================================
   CLICK OUTSIDE MODAL
========================================= */

document.addEventListener("click", function(event) {

    const modal = document.getElementById("surpriseModal");

    if (!modal) return;

    if (
        event.target === modal
    ) {
        closeSurprise();
    }

});


/* =========================================
   SURPRISE HEART EXPLOSION
========================================= */

function createExplosion() {

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "✨",
        "♡"
    ];

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.position = "fixed";

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.zIndex = "10000";

        heart.style.pointerEvents = "none";

        heart.style.fontSize =
            Math.random() * 20 + 12 + "px";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 350 + 100;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        heart.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.3)`,
                    opacity: 0
                }
            ],
            {
                duration: 1500 + Math.random() * 1000,
                easing: "cubic-bezier(.2,.8,.3,1)"
            }
        );

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2600);
    }

}


/* =========================================
   DATE COUNTER
========================================= */

const relationshipStart = new Date("2026-09-08T00:00:00");


function updateCounter() {

    const now = new Date();

    let difference =
        now.getTime() -
        relationshipStart.getTime();

    if (difference < 0) {
        difference = 0;
    }

    const totalSeconds =
        Math.floor(difference / 1000);

    const days =
        Math.floor(totalSeconds / 86400);

    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );

    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );

    const seconds =
        totalSeconds % 60;


    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    if (daysElement) {
        daysElement.textContent = days;
    }

    if (hoursElement) {
        hoursElement.textContent =
            String(hours).padStart(2, "0");
    }

    if (minutesElement) {
        minutesElement.textContent =
            String(minutes).padStart(2, "0");
    }

    if (secondsElement) {
        secondsElement.textContent =
            String(seconds).padStart(2, "0");
    }

}

setInterval(updateCounter, 1000);

updateCounter();


/* =========================================
   SCROLL REVEAL
========================================= */

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(
        ".photo-card, .timeline-item, .reason-card, .about-image, .about-content"
    )
    .forEach((element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(40px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        observer.observe(element);

    });


/* =========================================
   ESC TO CLOSE
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeSurprise();
    }

});