var form;

function initialiser()
{
	form = document.getElementById("form_1");
	
	form.choix[0].checked = true;
}

function votreChoix()
{
	//Méthode 1 :
	// if (form.choix[0].checked) alert(form.choix[0].value);
	// else if (form.choix[1].checked) alert(form.choix[1].value);
	// else alert(form.choix[2].value);
	
	// Méthode 2 :
	for(i = 0; i < form.choix.length; i++)
	{
		if (form.choix[i].checked) 
		{
			alert(form.choix[i].value);
			break;
		}
	}
}