document.getElementById("menuToggle").addEventListener("click", function() {
    const navbarMenu = document.getElementById("navbarMenu");
    navbarMenu.classList.toggle("active"); // Toggle the 'active' class
});

document.getElementById("closeButton").addEventListener("click", function() {
    const navbarMenu = document.getElementById("navbarMenu");
    navbarMenu.classList.remove("active"); // Remove 'active' class to close the menu
});


