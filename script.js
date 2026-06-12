const textes = [
    "Conception d'applications robustes, architecture de bases de données et intégration sécurisée.",
    
    "Développement d'applications web modernes avec PHP, Laravel, JavaScript et Bootstrap.",
    
    "Création d'interfaces fluides, responsives et centrées sur l'expérience utilisateur.",
    
    "Conception d'API performantes et intégration de solutions métier adaptées aux besoins.",
    
    "Passionné par le code propre, les bonnes pratiques et l'amélioration continue."
];

const element = document.getElementById("texte-rotation");

let index = 0;

setInterval(() => {

    element.classList.add("fade-out");

    setTimeout(() => {

        index = (index + 1) % textes.length;
        element.textContent = textes[index];

        element.classList.remove("fade-out");

    }, 1400);

}, 7000);








const elements = document.querySelectorAll(".apparition");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });
}, {
    threshold: 0.3
});

elements.forEach(element => {
    observer.observe(element);
});




document.addEventListener("DOMContentLoaded", () => {

    const counter = document.getElementById("counter");
    let started = false;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting && !started) {

                started = true;

                let value = 0;
                const target = 100;
                const duration = 2500;
                const stepTime = duration / target;

                const interval = setInterval(() => {

                    value++;
                    counter.textContent = value + "%";

                    counter.style.transform =
                        `scale(${1 + Math.sin(value * 0.3) * 0.08})`;

                    if (value >= target) {
                        clearInterval(interval);

                        counter.style.transform = "scale(1.15)";

                        setTimeout(() => {
                            counter.style.transform = "scale(1)";
                        }, 200);
                    }

                }, stepTime);
            }
        });

    }, { threshold: 0.5 });

    observer.observe(counter);

});




const textesDisponible = [
    "Je suis Dan Diby, un développeur Full Stack passionné par la création",
    "Je développe des applications web modernes",
    "Je maîtrise HTML, CSS, JavaScript et PHP",
    "Je conçois des interfaces responsives",
    "Je développe des solutions Full Stack performantes",
    "Je suis disponible pour vos projets"
];

const texteDisponible = document.getElementById("texte-slider");
const pointsDisponible = document.querySelectorAll(".point");

let indexDisponible = 0;

function changerTexteDisponible() {

    texteDisponible.classList.add("sortie");

    setTimeout(() => {

        indexDisponible++;

        if (indexDisponible >= textesDisponible.length) {
            indexDisponible = 0;
        }

        texteDisponible.textContent = textesDisponible[indexDisponible];

        pointsDisponible.forEach(point => {
            point.classList.remove("active");
        });

        pointsDisponible[indexDisponible].classList.add("active");

        texteDisponible.classList.remove("sortie");
        texteDisponible.classList.add("entree");

        setTimeout(() => {
            texteDisponible.classList.remove("entree");
        }, 50);

    }, 800);
}

setInterval(changerTexteDisponible, 5000);


const textesDisponibles = [
    "Je suis Dan Diby, un développeur Full Stack passionné par la création",
    "Je développe des applications web modernes",
    "Je maîtrise HTML, CSS, JavaScript et PHP",
    "Je conçois des interfaces responsives",
    "Je développe des solutions Full Stack performantes",
    "Je suis disponible pour vos projets"
];

const texteEl = document.getElementById("texte-slider");
const points = document.querySelectorAll(".point");

let i = 0;

function changerTexte() {

    // fade out
    texteEl.classList.add("fade-out");

    setTimeout(() => {

        // changer texte
        i = (i + 1) % textesDisponibles.length;
        texteEl.textContent = textesDisponibles[i];

        // update points
        points.forEach(p => p.classList.remove("active"));
        points[i].classList.add("active");

        // fade in
        texteEl.classList.remove("fade-out");

    }, 800);
}

setInterval(changerTexte, 5000);





document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
        
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 
    });

    const elementsToReveal = document.querySelectorAll(".reveal");
    elementsToReveal.forEach((el) => observer.observe(el));
});







document.addEventListener("DOMContentLoaded", () => {

    const anneesCounter = document.getElementById("annees-counter");

    let animationLancee = false;

    const anneesObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting && !animationLancee) {

                animationLancee = true;

                let valeur = 0;
                const objectif = 3;

                const interval = setInterval(() => {

                    valeur++;
                    anneesCounter.textContent = valeur;

                    anneesCounter.style.transform =
                        `scale(${1 + Math.sin(valeur * 2) * 0.08})`;

                    if (valeur >= objectif) {

                        clearInterval(interval);

                        anneesCounter.style.transform = "scale(1.15)";

                        setTimeout(() => {
                            anneesCounter.style.transform = "scale(1)";
                        }, 300);

                    }

                }, 800); // vitesse lente

            }

        });

    }, { threshold: 0.5 });

    anneesObserver.observe(anneesCounter);

});