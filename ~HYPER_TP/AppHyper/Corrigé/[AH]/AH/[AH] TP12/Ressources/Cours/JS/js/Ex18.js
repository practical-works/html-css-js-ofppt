var i = 0, button;

function initialiser()
{
	button = document.getElementById("button_1")
	
	incrementer();
}

function incrementer()
{
	i++;
	
	button.value = i;
}