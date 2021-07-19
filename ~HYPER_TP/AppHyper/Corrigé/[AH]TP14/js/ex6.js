
function debut()
{
	
	class_h2=document.getElementsByTagName('h2');
	class_h3=document.getElementsByTagName('h3');
	h_1=document.getElementsByTagName('h1')[0];
	
	body=document.body;
	body.style.width='700px';
	body.style.margin='20px auto';
	
	
	h_1.style.backgroundColor='blue';
	h_1.style.textAlign='center';
	for(i=0;i<class_h2.length;i++)
	{
		class_h2[i].style.backgroundColor='palegreen';
		class_h2[i].style.color ='blue';
	}
	
	// for(i=0;i<class_h3.length;i++)
	// {
		// class_h3[i].style.color='blue';
		// class_h3[i].style.borderBottom='1px solid blue';
	// }
	
	// for(var i=0;i<body.childNodes.length;i++)
	// {
		// if(body.childNodes[i].nodeName=='H2')
		// {
			// ul=document.createElement('ul');
			// ul.innerHTML=body.childNodes[i].innerHTML;
			
		// }
		// else if(body.childNodes[i].nodeName=='H3')
		// {
			// li=document.createElement('li');
			// li.innerHTML=body.childNodes[i].innerHTML;
			// ul.appendChild(li);
		// }
		
		
		// //t.nextSibling();next childNodes
		// //div_menu.appendChild(ul);
		// //parent.insertBefore(ul,div_menu);
	// }
	ul=document.createElement('ul');
	ul.style.listStyleType='none';
	
	for(var i=0;i<body.childNodes.length;i++)
	{
		if(body.childNodes[i].nodeName.search(/^(H2|H3)$/)!=-1)
		{
			li=document.createElement('li');
			a=document.createElement('a');
			if(body.childNodes[i].nodeName=='H2')
			{
				a.innerHTML=body.childNodes[i].innerHTML;
			}
			else if(body.childNodes[i].nodeName=='H3')
			{
				a.innerHTML=body.childNodes[i].innerHTML;
				a.style.marginLeft='40px';
			}
			body.childNodes[i].id=i;
			a.href='#'+i;
			
			li.appendChild(a);
			ul.appendChild(li);
		}
		
	}
	div_menu.appendChild(ul);
}
//------->jQuery / Mootools / Node.js /Angular / Prototype / Script.uc.ulos
