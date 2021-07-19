function tableaux()
{
	var i, j
	
	document.write('<table border = "1" width = "50%">');
	for(i = 1 ; i < 11 ; i++)
	{
		document.write('<tr>');
		for(j = 1 ; j < 11 ; j++)
		{
			document.write('<td> ['+i+','+j+']</td>');
		}
		document.write('</tr>');
	}
	document.write('</table>');
}