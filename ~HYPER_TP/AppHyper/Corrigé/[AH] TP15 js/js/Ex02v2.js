instial()
{
	document.getElementById('tvaimg').src = '../img/Erreur.png';
	
}



function Calculer()
{
	var prix = document.getElementById('Prix').value,
		tva  = document.getElementById('TVA').value,
		réduction = document.getElementById('Réduction').value,
		pttc = document.getElementById('PTTC');
		
	pttc.value = tva + prix - (prix*réduction);
}

q