// Fonctions Affichage
function show(text) {
    if (text.trim() != '')
        document.getElementById("main").innerHTML = text;
    else
        document.getElementById("main").innerHTML = document.getElementById("textBox").value;
}

// Fonction Table Multiplication
function check(F) {
    var matricule = F.matricule.value;
    var nom = F.nom.value;
    if (matricule.trim() == "") {
        alert("Entrez un matricule !");
        return false;
    } else if (isNaN(matricule)) {
        alert("Matricule doit être un numéro!");
        return false;
    } else if (nom.trim() == "") {
        alert("Entrez un nom");
        return false;
    } else if (!isNaN(nom)) {
        alert("Nom doit être un texte!")
        return false;
    } else {
        return true;
    }
}