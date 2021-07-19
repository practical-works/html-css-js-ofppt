function debut()
{
	table=document.createElement('table');	
	document.body.appendChild(table);
}
function afficher(n1,n2)
{
	//document.body.removeChild(table);
	//table.innerHTML='';
	
	while(table.hasChildNodes())
	{
		table.removeChild(table.firstChild);
	}
	table.remove();
	table = document.createElement('table');
	table.style.border = '1px solid blue';
	table.style.borderCollapse = 'collapse';
	
	nbr=0;
	for(i=1;i<=n1;i++)
	{
		tr=document.createElement('tr');
		for(j=1;j<=n2;j++)
		{
			td=document.createElement('td');
			td.style.border = '1px solid blue';
			td.style.width="50px";
			text=document.createTextNode(nbr+=1);
			td.appendChild(text);
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	document.body.appendChild(table);
}