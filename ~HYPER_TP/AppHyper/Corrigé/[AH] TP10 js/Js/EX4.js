function variante_1()
{
	var i = 0;
	
	document.write('<ul>');
	for(i = 0 ; i<11 ; i++)
	{
		document.write('<li>' + i + '</li>');
	}
	
	document.write('</ul>');
}

function variante_2()
{
	var i = 0;
	
	document.write('<ul>');
	for(i = 0 ; i<11 ; i++)
	{
		document.write('<li> 7 *' + i + '= ' + i*7 + '</li>');
	}
	
	document.write('</ul>');
}