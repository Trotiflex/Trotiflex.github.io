const navbarContent = `
             <ul>
            <li><a href="../index.html">About me</a></li>
            <li><a href="../vues/watch.html">Technology Watch</a></li>
            <li><a href="../vues/Documents.html">Documents</a></li>
            <li><a href="../vues/contact.html">Contact</a></li>

        </ul>
        <div class="border-gradient"></div>
`;

(() => {
    let balisenavbar = document.getElementById("navbar");
    balisenavbar.innerHTML = navbarContent;
})();

