function acceptarCookies() {
    document.getElementById('cookieBox').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('cookieBox').style.display = 'none';
    }, 500);
    localStorage.setItem('food_cookies_v3', 'accepted');
}

window.onload = function() {
    if (localStorage.getItem('food_cookies_v3')) {
        document.getElementById('cookieBox').style.display = 'none';
    }
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-main');
    btn.innerText = "Enviant dades segures...";
    btn.style.background = "#888";

    setTimeout(() => {
        alert("Enviament reeixit. FoodLogístic S.A. ha registrat el seu consentiment i es posarà en contacte aviat.");
        this.reset();
        btn.innerText = "Enviar Sol·licitud d'Informació";
        btn.style.background = "#4CAF50";
    }, 2000);
});
