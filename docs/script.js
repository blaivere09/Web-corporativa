document.addEventListener("DOMContentLoaded", () => {

    const cookieBox = document.getElementById("cookieBox");

    window.acceptarCookies = function () {
        cookieBox.style.display = "none";
        localStorage.setItem("cookies_foodlog", "accepted");
    };

    if (localStorage.getItem("cookies_foodlog") === "accepted") {
        cookieBox.style.display = "none";
    }

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("FoodLogístic ha rebut el teu missatge.");
            form.reset();
        });
    }

});
