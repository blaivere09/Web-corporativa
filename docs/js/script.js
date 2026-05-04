// Gestió de Cookies
function acceptarCookies() {
    document.getElementById('cookieBox').style.display = 'none';
    localStorage.setItem('foodlogistic_cookies', 'acceptades');
}

// Comprovar cookies al carregar
window.onload = function() {
    if (localStorage.getItem('foodlogistic_cookies') === 'acceptades') {
        document.getElementById('cookieBox').style.display = 'none';
    }
}

// Simulació d'enviament de formulari
document.getElementById('formContacte').addEventListener('submit', function(e) {
    e.preventDefault();
    const boto = this.querySelector('button');
    boto.innerHTML = "Enviant...";
    
    setTimeout(() => {
        alert("Gràcies! FoodLogístic S.A. ha rebut la seva informació.");
        this.reset();
        boto.innerHTML = "Enviar missatge";
    }, 1500);
});
