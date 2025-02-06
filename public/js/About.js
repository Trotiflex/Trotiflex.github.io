document.addEventListener("DOMContentLoaded", () => {
    let frames = document.querySelectorAll(".frame");
    let textElement = document.getElementById("animated-text");
    let fullText = "Bienvenue sur mon portfolio, découvrez mon univers !";
    let index = 0;
    let textIndex = 0;
    let displayedText = "";

    function showNextFrame() {
        if (index > 0) {
            frames[index - 1].style.opacity = "0"; // Cache l'image précédente
        }
        if (index < frames.length) {
            frames[index].style.opacity = "1"; // Affiche l'image
            index++;
            setTimeout(showNextFrame, 1000);
        } else {
            revealText(); // Une fois les images affichées, commence l'affichage du texte
        }
    }

    function revealText() {
        if (textIndex < fullText.length) {
            displayedText += fullText[textIndex]; // Ajoute une lettre à la phrase
            textElement.textContent = displayedText;
            textElement.style.opacity = "1"; // Rendre le texte visible progressivement
            textIndex++;
            setTimeout(revealText, 100); // Ajoute une lettre toutes les 100ms
        }
    }

    showNextFrame();
});
