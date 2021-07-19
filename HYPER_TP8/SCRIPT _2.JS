// Fonctions Affichage
function show(text) {
    if (text.trim() != '')
        document.getElementById("main").innerHTML = text;
    else
        document.getElementById("main").innerHTML = document.getElementById("textBox").value;
}

// Fonction Table Multiplication
function check(F) {
    var sexe = F.sexe;
    if (sexe[0].checked) {
        alert("Sexe Masculin");
    } 
    else {
        alert("Sexe Féminin");
    }
}