function Afficher()
{
	var chaine = document.form_1.text_1.value , i , ch = "";
	
	document.form_1.Majiscule.value = chaine.toUpperCase();
	document.form_1.Miniscule.value = chaine.toLowerCase();
	 
	
	
	for(i=0;i<chaine.length;i++)
	{
		if(i % 2 == 0) ch = ch + chaine[i].toLowerCase();
		else ch = ch + chaine[i].toUpperCase();
	}
	
	document.form_1.Etrange.value = ch;
}
 