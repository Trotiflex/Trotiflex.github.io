const navbarContent = `
     <img src="../public/image/logo.png" alt="logo">
        <ul>
            <li><a href="../vues/About.html">A propos</a></li>
            <li><a href="../vues/skills.html">compétences</a></li>
            <li><a href="../vues/Work.html">Travaux</a></li>
            <li><a href="../vues/book.html">Book</a></li>
            <li><a href="../vues/vt.html">Veille Technologique</a></li>

        </ul>
`;

(() => {
    let balisenavbar = document.getElementById("navbar");
    balisenavbar.innerHTML = navbarContent;
})();

