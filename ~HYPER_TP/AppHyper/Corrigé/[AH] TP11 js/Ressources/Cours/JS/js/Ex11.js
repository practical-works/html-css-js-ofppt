function afficher()
{
	var txt = document.form_1.text_1.value;
	
	document.form_1.text_2.value = txt;
}

function vousEtes()
{
	var txt = document.form_2.text_1.value;
	
	alert("Vous êtes : " + txt);
}

function parite()
{
	var nombre = document.form_3.txt_nombre.value;
	
	if (nombre % 2 == 0)
	{
		alert(nombre + " est pair");
	}
	else
	{
		alert(nombre + " est impair");
	}
}

function signe(nombre)
{
	if (nombre > 0)
	{
		alert(nombre + " est strictement positif");
	}
	else if (nombre == 0)
	{
		alert(nombre + " est nul");
	}
	else
	{
		alert(nombre + " est strictement négatif");
	}
}

function carre(nombre)
{
	return Math.pow(nombre, 2);
	/*return nombre*nombre;*/
}


