function Composer()
{
	var chaine = document.getElementById("Chaine").value;
		 
		 
	if(/ /.test(chaine)) document.getElementById("resltat").value = "OUI";
	else document.getElementById("resltat").value = "NON";
}