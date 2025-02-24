const navbarContent = `
             <ul>
            <li><a href="../index.html">About me</a></li>
            <li><a href="../vues/contact.html">Contact</a></li>
            <li><a href="../vues/watch.html">Technology Watch</a></li>
            

        </ul>
        <div class="border-gradient"></div>
`;

(() => {
    let balisenavbar = document.getElementById("navbar");
    balisenavbar.innerHTML = navbarContent;
})();

