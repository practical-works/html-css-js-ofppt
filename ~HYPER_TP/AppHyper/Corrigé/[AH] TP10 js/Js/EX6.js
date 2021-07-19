function euro()
{
	var ERO = document.form_calculette.text_nombre.value;
	
	if(ERO == '')
		alert('saisie une valeur svp');
	else
		alert(ERO + "euro ="  + 10.0225*ERO + "DH");
    
}

function dirham()
{
	var DH = document.form_calculette.text_nombre.value;
	
	if(DH == '')
		alert('saisie une valeur svp');
	else
		alert(DH + "DH ="  + DH / 10.0225 + "euro");
}