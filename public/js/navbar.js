const navbarContent = `
     <span class="logo">Marina.</span>
        <ul>
            <li><a href="/vues/curriculum-vitae.html">CV</a></li>
            <li><a href="index.html" class="active">compétences</a></li>
            <li><a href="/vues/Work.html">Travaux</a></li>
            <li><a href="/vues/book.html">Book</a></li>
            <li><a href="/vues/vt.html">Veille Technologique</a></li>

        </ul>
`;

(() => {
    let balisenavbar = document.getElementById("navbar");
    balisenavbar.innerHTML = navbarContent;
})();

