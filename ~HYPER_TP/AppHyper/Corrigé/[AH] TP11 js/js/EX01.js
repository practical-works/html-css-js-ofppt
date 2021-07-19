var text_1 = 1;


function Initialiser()
{
	text_1 = document.getElementById("text_1");
	text_1.readOnly = true;
}

function plus()
{
	if(text_1<=10) document.form_1.p.value=++text_1;	
	else text_1=1;
}

function moins()
{
	if(text_1>0)	document.form_1.p.value=--text_1;	
	else text_1=10;
}