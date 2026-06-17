const textes = [
    "Je développe des applications Web, Desktop, Mobiles.",
    
    "Pour moi, il est important que le code soit clair et propre pour une meilleure maintenance.",
    
    "Je m'investis à 100% dans mon travail afin de répondre aux exigences du client.",
    
    "Je conçois des API performantes et j'intègre des solutions métier adaptées aux besoins.",
    
    "Le développement d'applications est, avant tout, une passion pour moi.",

    "Disponible pour de nouvelles opportunités, je reste à votre entière disposition. Contactez-moi ou laissez-moi un message !"
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





const form = document.getElementById('portfolioForm');
const responseMessage = document.getElementById('formResponse');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page
    
    // Changement de style temporaire pendant l'envoi (Classe Bootstrap 'text-info')
    responseMessage.textContent = "Envoi en cours...";
    responseMessage.className = "mt-3 text-info fw-bold";

    const formData = new FormData(form);

    // Envoi des données vers l'API Web3Forms
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(async (response) => {
        let json = await response.json();
        
        if (response.status == 200) {
            // Succès : Changement en vert (Classe Bootstrap 'text-success')
            responseMessage.textContent = "Message envoyé avec succès ! Je vous répondrai très rapidement.";
            responseMessage.className = "mt-3 text-success fw-bold";
            form.reset(); // Vide automatiquement les champs du formulaire
        } else {
            // Erreur serveur : Affichage en rouge
            responseMessage.textContent = "Erreur : " + json.message;
            responseMessage.className = "mt-3 text-danger fw-bold";
        }
    })
    .catch(error => {
        // Erreur réseau (ex: pas d'internet)
        console.log(error);
        responseMessage.textContent = "Une erreur est survenue. Vérifiez votre connexion.";
        responseMessage.className = "mt-3 text-danger fw-bold";
    });
});