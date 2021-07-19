function Calculer()
{
	var prix = document.getElementById('Prix').value,
		tva  = document.getElementById('TVA').value,
		réduction = document.getElementById('Réduction').value,
		pttc = document.getElementById('PTTC');
		
		//addEventListener
	pttc.value = tva + prix - (prix*réduction);
}


function colorer()
{
	var nm =  document.getElementById('Prix');
	
	nm.style.backgroundColor = 'yellow';
}