function Vérifier()
{
	var reg=/06[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
	if(reg.test(document.getElementById("Text_1").value))
			alert("BIEN");
	else alert("Non");

}