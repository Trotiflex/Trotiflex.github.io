function initCarousel(carousel) {
  const items = carousel.querySelectorAll(".carousel-item");
  const dots = carousel.querySelectorAll(".dot");

  let currentIndex = 1; // L'élément central est au centre au départ

  function updateCarousel(newIndex) {
      currentIndex = newIndex;

      items.forEach((item, index) => {
          item.classList.remove("left", "center", "right", "hidden");

          if (index === currentIndex) {
              item.classList.add("center");
          } else if (index === (currentIndex + 1) % items.length) {
              item.classList.add("right");
          } else if (index === (currentIndex - 1 + items.length) % items.length) {
              item.classList.add("left");
          } else {
              item.classList.add("hidden"); // Cache les autres images
          }
      });

      // Mise à jour des dots
      dots.forEach((dot, index) => {
          dot.classList.toggle("active", index === currentIndex);
      });
  }

  // Initialiser l'état du carrousel
  updateCarousel(currentIndex);

  // Ajout des événements de clic
  items.forEach((item, index) => {
      item.addEventListener("click", () => updateCarousel(index));
  });

  dots.forEach((dot, index) => {
      dot.addEventListener("click", () => updateCarousel(index));
  });
}

// Initialisation de tous les carrousels présents sur la page
document.querySelectorAll(".carousel-container").forEach(initCarousel);
