function Verifier()
{
	var ch = document.form_1.text_1.value;
	if(ch.charCodeAt(0) > 64 && ch.charCodeAt(0) < 71) alert ('Bien !')
    else alert('Pas bien !');
}