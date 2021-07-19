var i = 0 ,jour = new Array() , text ;

function Initialiser()
{
	text = document.getElementById("Text_1");
	//Text.readOnly = true;
	
	jour = new Array('Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche');
	
	text.value = jour[i];
	
}

function Suivant(btn)
{
	if(btn == "suivant") t.value = jour[++i];
	else
	{
		text.value = jour[6];
		i = 0;
	}
}

function Precedant(btn)
{
	if(i >= 0)
	{
		if(btn == "precedent") text.value = jour[--i];
		else
		{
			text.value = jour[0];
			i = 0;
		}
	}
	else i = 10;
}