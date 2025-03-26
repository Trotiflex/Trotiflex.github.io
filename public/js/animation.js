// Fonction pour vérifier si l'élément est dans le viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour ajouter la classe "visible" aux éléments qui entrent dans le viewport
function checkVisibility() {
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('visible');
        }
    });
}

// Écouter l'événement de défilement pour déclencher la vérification de la visibilité
window.addEventListener('scroll', checkVisibility);

// Vérifiez la visibilité au chargement de la page aussi
document.addEventListener('DOMContentLoaded', checkVisibility);
