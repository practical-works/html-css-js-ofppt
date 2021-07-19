function Envoyer(F) {
	var nom = F.nom.value;
	var prenom = F.prenom.value;
	var age = F.age.value;
	var pseudo = F.pseudo.value;
	var pass = F.pass.value;
	var pass2 = F.pass.value;
	var pays =F.pays.value;

	if (nom == "") {
		warn(F);
		return false;
	}

	return true;
}
function warn(F) {
	F.nom.style.backgroundColor = "pink";
}