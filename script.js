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
