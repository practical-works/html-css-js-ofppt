var m = new Array(2), i, j, x = 1;

for(i = 0; i < m.length; i++)
{
	m[i] = new Array(4);
	
	for(j = 0; j < m[i].length; j++)
	{
		m[i][j] = x;
		x++;
	}
}

for(i = 0; i < m.length; i++)
{
	document.write(" | ");
	
	for(j = 0; j < m[i].length; j++)
	{
		document.write(m[i][j] + " | ");
	}
	
	document.write("<br />");
}
