document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll(
        ".profile-frame, .cat_2, .profile-description, .cat, .skills-section, .skill-item, .project-item, .cursus-section, .cursus-box"
    );

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.animationPlayState = "running";
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2, // Déclenche lorsque 20% de l'élément est visible
        }
    );

    elementsToAnimate.forEach((element) => {
        element.style.opacity = "0"; // Masque les éléments au départ
        element.style.animationPlayState = "paused"; // Empêche l'animation avant le scroll
        observer.observe(element);
    });
});
