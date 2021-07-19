function afficher()
{
	t1=text_1.value.substr(0,text_1.value.length-2);
	
	
	document.body.removeChild(table);
	
	table = document.createElement('table');
	table.style.border = '1px solid blue';
	table.style.borderCollapse = 'collapse';
	
	chaine="";
	//.search('^er$')
	//chaine=text_1.value;
	//alert(chaine.search('er$'));
	//chaine.replace('/er$/','--');
	
	for(i=0;i<6;i++)
	{
		tr=document.createElement('tr');
		tr.style.width="30px";
		for(j=0;j<2;j++)
		{
			td=document.createElement('td');
			td.style.border = '1px solid blue';
			td.style.width="100px";
			if(j==0)
			{
				chaine=tbl2[i];
			}
			else 
			{
				chaine=t1+tbl1[i];
			}
			text=document.createTextNode(chaine);
			td.appendChild(text);
			tr.appendChild(td);
		}
		table.appendChild(tr);
		
	}
	
	
	document.body.appendChild(table);
}



function debut()
{
	tbl2 = new Array('je','tu','il / elle','nous','vous','ils / elles');
	tbl1 = new Array('e','es','e','ons','ez','ent');
	table=document.createElement('table');
	document.body.appendChild(table);
}
