function afficher()
{
	var qlqChose = prompt("Veuillez donner quelque chose !");
	
	if(qlqChose == null)
	{
		alert("Vous avez choisi Annuler")
	}
	else if(qlqChose == "")
	{
		alert("Vous n'avez rien écrit !!!")
	}
	else
	{
		document.form_1.text_1.value = qlqChose;
	}
}