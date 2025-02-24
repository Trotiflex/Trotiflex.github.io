function initCarousel(carousel) {
    const items = carousel.querySelectorAll(".carousel-item");
    const dots = carousel.querySelectorAll(".dot");
  
    let currentIndex = 1; // L'élément central est toujours au centre au départ
  
    // Fonction pour mettre à jour les classes des images et des dots
    function updateCarousel(newIndex) {
      currentIndex = newIndex;
  
      // Mettre à jour les classes des images
      items.forEach((item, index) => {
        item.classList.remove("left", "center", "right");
        if (index === currentIndex) {
          item.classList.add("center");
        } else if (index === (currentIndex + 1) % items.length) {
          item.classList.add("right");
        } else if (index === (currentIndex - 1 + items.length) % items.length) {
          item.classList.add("left");
        }
      });
  
      // Mettre à jour les classes des dots
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }
  
    // Initialiser l'état du carrousel (afficher l'élément central)
    updateCarousel(currentIndex);
  
    // Ajouter un écouteur d'événement pour les clics sur les images
    items.forEach((item, index) => {
      item.addEventListener("click", () => {
        updateCarousel(index);
      });
    });
  
    // Ajouter un écouteur d'événement pour les clics sur les dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        updateCarousel(index);
      });
    });
  }
  
  // Initialiser tous les carrousels présents sur la page
  document.querySelectorAll(".carousel-container").forEach(initCarousel);