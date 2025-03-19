const navbarContent = `
    <div class="menu-burger" id="menu-burger">☰</div>
    <div class="overlay" id="overlay"></div>

    <!-- Version Desktop -->
    <ul class="desktop-menu">
        <li><a href="../index.html">About me</a></li>
        <li><a href="../vues/watch.html">Technology Watch</a></li>
        <li><a href="../vues/Documents.html">Documents</a></li>
        <li>
            <a href="https://github.com/Trotiflex" target="_blank">
                <img src="../public/image/github.png" alt="GitHub" class="github-icon" />
            </a>
        </li>
    </ul>

    <div class="navbar-mobile" id="navbar-mobile">
        <ul>
            <li><a href="../index.html">About me</a></li>
            <li><a href="../vues/watch.html">Technology Watch</a></li>
            <li><a href="../vues/Documents.html">Documents</a></li>
            <li>
                <a href="https://github.com/Trotiflex" target="_blank">
                    <img src="../public/image/github.png" alt="GitHub" class="github-icon" />
                </a>
            </li>
        </ul>
    </div>
`;

(() => {
    let navbarContainer = document.getElementById("navbar");
    navbarContainer.innerHTML = navbarContent;

    const menuBurger = document.getElementById("menu-burger");
    const navbarMobile = document.getElementById("navbar-mobile");
    const overlay = document.getElementById("overlay");

    // Ouvrir le menu mobile
    menuBurger.addEventListener("click", () => {
        navbarMobile.style.right = "0";
        overlay.style.display = "block";
    });

    // Fermer le menu en cliquant sur l'overlay
    overlay.addEventListener("click", () => {
        navbarMobile.style.right = "-250px";
        overlay.style.display = "none";
    });

})();

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar a");
    const currentURL = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentURL) {
            link.classList.add("active");
        }
    });
});
