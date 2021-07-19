function afficher()
{
	table = document.createElement('table');
	table.style.border = '1px solid blue';
	table.style.borderCollapse = 'collapse';
	
	cells=0;
	rows=0;
	nbr=0;
	for(i=-1;i<=10;i++)
	{
		tr=document.createElement('tr');
		if(i==0)
		{
			
			tr.style.backgroundColor='palegreen';
		}
		for(j=-1;j<=10;j++)
		{
			td=document.createElement('td');
			td.style.border = '1px solid blue';
			td.style.width="50px";
			
			if(i==-1)
			{
				nbr=j;
				
			}
			else if(j==-1 && i>-1)
			{
				nbr=i;
			}
			else 
			{
				nbr=i*j;
			}		
			if(i==-1 && j==-1)
			{
				nbr='';
			}
			
			
			text=document.createTextNode(nbr);
			if(j==0)
			{
				td.style.backgroundColor='palegreen';
			}
			
			td.appendChild(text);
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	document.body.appendChild(table);
}