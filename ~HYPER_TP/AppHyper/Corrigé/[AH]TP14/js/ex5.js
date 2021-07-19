function debut()
{
	class_h2=document.getElementsByClassName('h_2');
	class_h3=document.getElementsByClassName('h_3');
	
	
	h_1.style.backgroundColor='gray';
	//h1.style.textAlign='center';
	
	ul=document.createElement('ul');
	ul.style.listStyleType='circle';
	for(i=0;i<class_h2.length;i++)
	{
		class_h2[i].style.backgroundColor='palegreen';
		class_h2[i].style.color ='blue';
		
		
		
		text=document.createTextNode(class_h2[i].innerHTML);
		
		li=document.createElement('li');
		li.style.textDecoration='underline';
		li.style.color='blue';
		li.appendChild(text);
		
		ul.appendChild(li);
	}
	div_menu.appendChild(ul);
	
	for(i=0;i<class_h3.length;i++)
	{
		class_h3[i].style.color='blue';
		class_h3[i].style.borderBottom='1px solid blue';
	}
	
}

