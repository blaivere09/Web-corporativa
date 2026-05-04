function acceptarCookies() {
    document.getElementById('cookieBox').style.display = 'none';
    localStorage.setItem('cookies_foodlogistic_v2', 'acceptades');
}

window.onload = function() {
    if (localStorage.getItem('cookies_foodlogistic_v2')) {
        document.getElementById('cookieBox').style.display = 'none';
    }
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Formulari enviat correctament. Hem registrat el seu consentiment legal.");
    this.reset();
});
