var liste;

function initialiser()
{
	liste = document.getElementById("liste");
}

function votreSelection()
{
	alert("Vous avez sélectionné : " + liste.options[liste.selectedIndex].value + " - Son indice est : " + liste.selectedIndex);
}