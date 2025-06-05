function LoadNavBar()
{
    // Determine the current page
    const path = window.location.pathname;
    let currentPage = "home";
    if (path.includes("/Projects")) currentPage = "projects";
    else if (path.includes("/Skills")) currentPage = "skills";

    // Load and inject the navbar
    fetch("/Resources/html/navbar.html")
        .then(response => response.text())
        .then(html => {
        document.getElementById("navbar-container").innerHTML = html;

        // Set active class after it's loaded
        const links = document.querySelectorAll('.Navbar a[data-page]');
        links.forEach(link => {
            if (link.dataset.page === currentPage) {
            link.classList.add("active");
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", LoadNavBar);