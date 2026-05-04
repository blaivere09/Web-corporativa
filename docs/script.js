function acceptarCookies() {
    document.getElementById('cookieBox').style.display = 'none';
    localStorage.setItem('cookies_food', 'true');
}

window.onload = function() {
    if (localStorage.getItem('cookies_food') === 'true') {
        document.getElementById('cookieBox').style.display = 'none';
    }
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Dades enviades a FoodLogístic S.A. Gràcies!");
    this.reset();
});