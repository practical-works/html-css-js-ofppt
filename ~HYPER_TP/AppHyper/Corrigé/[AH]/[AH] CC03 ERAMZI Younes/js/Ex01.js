function calculer()
{
	var operation = document.getElementById('operation').value,
		valA      = document.getElementById('A').value,
		valB      = document.getElementById('B').value,
		val;
	
	if (operation == '*') val = valA * valB;
	if (operation == '/')
	{
		if(valB == '0') val = "ERREUR";
		else val = valA / valB;
	}		
	if (operation == '-') val = valA - valB;
	if (operation == '+') val = Number.parseFloat(valA) + Number.parseFloat(valB); //Number.parseFloat ... pour ne pas conciderer comme chaine de caractére
	
	document.getElementById('résultat').value = val;	
}