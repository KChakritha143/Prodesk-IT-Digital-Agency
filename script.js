
document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("darkToggle");

    if (btn) {
        btn.addEventListener("click", function () {
            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                btn.innerText = "☀️";
            } else {
                btn.innerText = "🌙";
            }
        });
    }

    const menu = document.getElementById("menu");
    const navLinks = document.getElementById("navlinks");

    menu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

});