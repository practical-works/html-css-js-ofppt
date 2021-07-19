var etat = true, button;

function initialiser()
{
	button = document.getElementById("unAutreButton");
}

function affiherOuMasquer()
{
	if (etat) button.style.visibility = "hidden";
	else	  button.style.visibility = "visible";
	
	etat = !etat;
}