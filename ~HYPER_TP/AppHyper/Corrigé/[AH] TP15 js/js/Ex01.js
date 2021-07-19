function validation()
{
	var i , flag = "", msg ="";
	
	for(i=0;i<6;i++)
	{
		//alert(document.forms["Formulaire"][i].value);
		flag += document.forms["Formulaire"][i].value;
	}
	
	if(flag == "")
	{
		alert("il faut remplissée tous les champs obligatoire !");
		return false;
	}			
	else
	{
		//var regMail = /^\D(\w){1,}\@(\w){1,}\.([A-Za-z]{2,3})$/;
		var regMail = /^[^@\d][^0]*@[^@]+\.xyz$/;
		//
		if(document.Formulaire.Société.value.length < 3)
			msg += 'Société: 3 caractére au min \n';
		if(document.Formulaire.Personnes.value.length < 3)
			msg += 'Personnes à contacter: 3 caractére au min \n';
		if(document.Formulaire.Codepostal.value.search(/^\d[5,]$/) != -1)
			msg += 'Code postal: 5 caractére au min \n';
		if(document.Formulaire.Ville.value.length < 5)
			msg += 'Ville: 5 caractére au min \n';
		
		if(regMail.test(document.getElementById('E-Mail').value) == false)
		{
			msg += 'Email : format invalide \n';
			document.getElementById('E-Mail').focus();
		}
		
		if(!document.getElementById('Téléphone').value.match(/^0[56]\d{8}$/))
			msg += 'Téléphone : entrer une valeur numeric';
		alert(msg);
		
	}
	if(msg == "") return true
	else return false;
}

function Choisissez(id_get,id_put)
{
	//erreur
	var choix = document.getElementById(id_get);
	var put_element = document.getElementById(id_put);
	//put_element.innerHTML ="";
	
	if(choix.value != "choisissez")
		put_element.innerHTML += '-' + choix.value + '\n';
	
}

function effacer()
{
	for(i=0;i<document.getElementsByTagName('input').length;i++)
	{
		var theInput = document.getElementsByTagName('input')[i];
		if(theInput.type=='text')
	}
}