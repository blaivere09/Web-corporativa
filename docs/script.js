function acceptarCookies() {
    document.getElementById('cookieBox').style.display = 'none';
    localStorage.setItem('food_cookies_v4', 'true');
}

window.onload = function() {
    if (localStorage.getItem('food_cookies_v4')) {
        document.getElementById('cookieBox').style.display = 'none';
    }
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("FoodLogístic S.A. ha rebut les seves dades i el seu consentiment legal. Ens posarem en contacte amb vostè en breu.");
    this.reset();
});
