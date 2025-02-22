document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const cursusItems = document.querySelector(".cursus-items");
        const boxes = document.querySelectorAll(".cursus-box");

        let position = cursusItems.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            cursusItems.style.opacity = "1";
            cursusItems.style.transform = "translateY(0)";
            boxes.forEach((box, index) => {
                setTimeout(() => {
                    box.style.opacity = "1";
                    box.style.transform = "translateY(0)";
                }, index * 300);
            });
        }
    });
});
