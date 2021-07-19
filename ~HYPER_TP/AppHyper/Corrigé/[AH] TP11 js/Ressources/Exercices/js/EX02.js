var i = 0 ,jour = new Array();

function Initialiser()
{
	text = document.form_1.Text.value;
	//Text.readOnly = true;
	
	jour[0] = "Lundi";
	jour[1] = "Mardi";
	jour[2] = "Mercredi";
	jour[3] = "Jeudi";
	jour[4] = "Vendredi";
	jour[5] = "Samedi";
	jour[6] = "Dimanche";
	
}

function Suivant(btn)
{
	if(btn == "suivant")
	{
		text = jour[i];
		i++;
	}
	else
	{
		text = jour[6];
		i = 0;
	}
}

function Precedant(btn)
{
	if(btn == "precedent")
	{
		text = jour[i];
		i--;
	}
	else
	{
		text = jour[0];
		i = 0;
	}
}