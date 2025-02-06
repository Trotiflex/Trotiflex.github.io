document.addEventListener("DOMContentLoaded", () => { 
    // Sélectionner les éléments nécessaires
    let frames = document.querySelectorAll(".frame");
    let textElement = document.getElementById("animated-text");
    let framesAfter = document.querySelectorAll(".frame-after");
    let fullText = "Bienvenue sur mon portfolio, découvrez mon univers !";
    let index = 0;
    let textIndex = 0;
    let displayedText = "";
    
    // Sélectionner le bouton d'entrée et le fond de transition
    let enterButton = document.getElementById("enter-btn");
    let transitionOverlay = document.getElementById("transition-overlay");

    // Fonction pour afficher les images de la bannière une par une
    function showNextFrame() {
        if (index > 0) {
            frames[index - 1].style.opacity = "0"; // Cache l'image précédente
        }
        if (index < frames.length) {
            frames[index].style.opacity = "1"; // Affiche l'image actuelle
            index++;
            setTimeout(showNextFrame, 600); // Passe à l'image suivante toutes les 600ms
        } else {
            startTextAndBannerAfter(); // Une fois les images de la bannière affichées, commence l'animation du texte et des images de banner-after
        }
    }

    // Fonction pour afficher le texte progressivement
    function revealText() {
        if (textIndex < fullText.length) {
            displayedText += fullText[textIndex]; // Ajoute une lettre à la phrase
            textElement.textContent = displayedText;
            textElement.style.opacity = "1"; // Rendre le texte visible progressivement
            textIndex++;
            setTimeout(revealText, 80); // Ajoute une lettre toutes les 80ms
        } else {
            showEnterButton(); // Affiche le bouton une fois le texte entièrement affiché
        }
    }

    // Fonction qui lance l'animation de la `banner-after` et le texte
    function startTextAndBannerAfter() {
        // Commence à afficher le texte
        revealText();

        // Commence à afficher les images de banner-after en même temps que le texte
        framesAfter.forEach((frame, i) => {
            setTimeout(() => {
                frame.style.opacity = "1"; // Affiche chaque image après un certain délai
            }, i * 600); // Délai de 600ms entre chaque image
        });

        // Faire disparaître toutes les images de .banner-after après que la dernière image soit apparue
        setTimeout(() => {
            framesAfter.forEach((frame) => {
                frame.style.visibility = "hidden"; // Rendre les images invisibles, mais elles prennent toujours de la place
            });
        }, framesAfter.length * 600 ); // Disparaître après la dernière image de .frame-after + 1s
    }

    // Affiche le bouton après l'animation du texte
    function showEnterButton() {
        enterButton.style.display = "inline-block"; // Affiche le bouton
    }

    // Fonction pour lancer la transition avec fond blanc
    function startTransition() {
        transitionOverlay.style.display = "block"; // Affiche le fond blanc
        setTimeout(() => {
            transitionOverlay.style.opacity = "1"; // Applique l'animation de fondu blanc
        }, 100); // Un petit délai pour appliquer la transition

        // Redirige vers la page about.html après la fin de la transition
        setTimeout(() => {
            window.location.href = "vues/About.html";
        }, 2000); // Redirection après 2 secondes
    }

    // Lance l'affichage des images dans la .banner dès que la page se charge
    showNextFrame();

    // Écouteur d'événement pour le bouton
    enterButton.addEventListener("click", startTransition);
});
