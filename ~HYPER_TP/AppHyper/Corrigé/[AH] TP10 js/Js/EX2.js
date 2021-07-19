function afficher(Age)
{
	/*var Age = document.form1.text_Age.value;*/
	
	if(Age >=1 && Age <=17)
	{
		alert("Vous n'êtes pas encore majeur.")
	}
	else if(Age >=18 && Age <=49)
	{
		alert("Vous êtes majeur mais pas encore senior.")
	}
	else if(Age>=50 && Age<=59)
	{
		alert("Vous êtes senior mais pas encore retraité.")
	}
	else if(Age >=60 && Age<=120)
	{
		alert("Vous êtes retraité, profitez de votre temps libre !")
	}
	else
	{
		alert("ERREUR")
	}
	
	
}