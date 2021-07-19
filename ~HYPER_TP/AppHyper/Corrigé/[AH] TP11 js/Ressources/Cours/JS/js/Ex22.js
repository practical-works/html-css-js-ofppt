var form;

function initialiser()
{
	form = document.forms[0];
	
	document.getElementById("choix_1").checked = true;
}

function vosChoix()
{
	var choix = "Vos choix sont : \n";
	
	//Méthode 1 :
	if (form.choix[0].checked) choix += form.choix[0].value + "\n";
	if (form.choix[1].checked) choix += form.choix[1].value + "\n";
	if (form.choix[2].checked) choix += form.choix[2].value + "\n";
	
	// Méthode 2 :
	// for(i = 0; i < form.choix.length; i++)
	// {
		// if(form.choix[i].checked) choix += form.choix[i].value + "\n";
	// }
	
	// Méthode 3 :
	// for(i = 0; i < form.elements.length; i++)
	// {
		// element = form.elements[i];
		
		// if(element.type == "checkbox")
		// {
			// if(element.checked) choix += element.value + "\n";
		// }
	// }
	
	alert(choix);
}