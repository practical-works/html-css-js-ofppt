function initialiser()
{
	texte = document.getElementById("texte_1")
	
	texte.readOnly = true;
	texte.size = "50";
}

function colorerTexte(couleur)
{
	if (couleur == 'bleu') texte.style.color = "blue";
	else if (couleur == 'gris') texte.style.color = "gray";
	else if (couleur == 'rouge') texte.style.color = "red";
	else texte.style.color = "black";
}

function colorerBackground(couleur)
{
	if (couleur == 'jaune') texte.style.backgroundColor = "yellow";
	else if (couleur == 'vert') texte.style.backgroundColor = "green";
	else texte.style.backgroundColor = "white";
}

function parDefaut()
{
	colorerTexte();
	colorerBackground();
}