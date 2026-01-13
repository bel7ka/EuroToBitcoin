function convertir() {
    let euro = document.getElementById("euro").value;

    // Taux au 10/01/2026 : 1 BTC = 77 600 €
    let taux = 0.000013;

    let bircoin = euro * taux;

    document.getElementById("resultat").textContent = 
        euro + " € = " + bitcoin + " BTC ";
}