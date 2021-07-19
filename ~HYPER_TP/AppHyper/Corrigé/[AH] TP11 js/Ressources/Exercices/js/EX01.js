function Initialiser()
{
	text=document.form_1.p.value;
	
}

function plus()
{
	if(text<=10)
	{
		document.form_1.p.value=text;
		text++;
	}
	else text=1;
}

function moins()
{
	if(text>0)
	{
		
		document.form_1.p.value=text;
		text--;
		
	}
	else text=10;
		
		
	
	
}