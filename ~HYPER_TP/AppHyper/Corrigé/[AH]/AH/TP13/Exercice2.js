j=0;
function Afficher()
{
	form = document.forms[0];
	
	
	for(i = 0; i < form.elements.length; i++)
	{
		element = form.elements[i];
		alert("ff");
		if(element.type == "checkbox")
		{
			if(element.checked) j += 1;
		}
		
	}
	
	if(j>=3)alert('bien');
	else alert('po bien');
	
}