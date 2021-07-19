function Extraire()
{
	var chaine = document.form_1.text_1.value;
	var	debut  = document.form_1.Debut.value;
	var	Nbre   = document.form_1.Nembre.value;
	
	document.form_1.Resultat.value = chaine.slice(3,6);
	alert("");
}
 