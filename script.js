function convertir() {
    let euro = document.getElementById("euro").value;

    // Taux au 10/01/2026 : 1 BTC = 77 600 €
    let taux = 78959;

    let bitcoin = euro * taux;

    document.getElementById("resultat").textContent = 
        euro + " € = " + bitcoin + " BTC ";
}