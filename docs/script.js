document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // COOKIES
    // =========================
    const cookieBox = document.getElementById('cookieBox');

    window.acceptarCookies = function () {
        cookieBox.style.display = 'none';
        localStorage.setItem('food_cookies_v4', 'true');
    };

    if (localStorage.getItem('food_cookies_v4')) {
        cookieBox.style.display = 'none';
    }


    // =========================
    // FORMULARI CONTACTE
    // =========================
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Simulació d'enviament (com demana la tasca)
            alert(
                "FoodLogístic S.A. ha rebut la seva sol·licitud.\n" +
                "Ens posarem en contacte amb vostè en breu."
            );

            form.reset();
        });
    }

});
