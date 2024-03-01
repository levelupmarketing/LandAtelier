function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    if (menu.style.width === "100vw") {
        menu.style.width = "0";
    } else {
        menu.style.width = "100vw";
    }
}