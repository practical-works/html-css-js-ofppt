function show(form) {
	var titre="SansTitre", nomComplet="SansNom SansPrénom";
	var age=0, pays="SansPays", langues="SansLangues";
	if (form.sexe[0].checked) {
		titre = "Monsieur";
	} else if (form.sexe[1].checked) {
		titre = "Madame";
	}
	if (form.nom.value == "" ) {
		nomComplet += "SansNom ";
	} else {
		nomComplet += form.nom.value + " ";
	}
	if (form.nom.value == "" ) {
		nomComplet += "SansPrénom";
	} else {
		nomComplet += form.prenom.value;
	}
	if (form.dateNaiss.value != "") {
		age = Date.now() - form.dateNaiss.value;
	}
	var txt = 
		"Vous êtes " + titre + " " + nomComplet + ".<br>" +
		"Vous avez " + age + " ans, vous êtes né en " + pays + ", " +
		"et vous parlez " + langues + ".<br>Bienvenue";

	document.getElementById("box").innerHTML = txt;
}