var commentaire;

function initialiser()
{
	commentaire = document.getElementById("commentaire");
	commentaire.innerHTML = "";
}

function ajouter()
{
	commentaire.innerHTML += document.getElementById("texte").value + "\n";
}