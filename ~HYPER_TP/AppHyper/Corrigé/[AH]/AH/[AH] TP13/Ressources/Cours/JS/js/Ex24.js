var languages;

function initialiser()
{
	languages = document.getElementById("languages");
}

function ajouter()
{
	languages[languages.options.length] = new Option(document.getElementById("texte").value);
	
	languages.size = languages.options.length;
}

function votreSelection()
{
	var selection = "";
	
	// Au lieu de languages.options, on peut utiliser juste languages
	for(i = 0; i < languages.options.length; i++)
	{
		option = languages.options[i];
		
		if(option.selected) selection += option.value + " - ";
	}
	
	alert(selection);
}