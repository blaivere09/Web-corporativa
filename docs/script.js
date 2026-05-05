document.addEventListener("DOMContentLoaded", () => {

    const cookieBox = document.getElementById("cookieBox");

    window.acceptarCookies = function () {
        cookieBox.style.display = "none";
        localStorage.setItem("cookies_ok", "true");
    };

    if (localStorage.getItem("cookies_ok")) {
        cookieBox.style.display = "none";
    }

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Missatge enviat correctament a FoodLogístic S.A.");
            form.reset();
        });
    }

});
