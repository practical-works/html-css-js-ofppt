function debut()
{
	class_h2=document.getElementsByClassName('h_2');
	class_h3=document.getElementsByClassName('h_3');
	h_1=document.getElementsByTagName('h1')[0];
	
	body=document.body;
	body.style.width='700px';
	body.style.margin='20px auto';
	body.style.backgroundColor='gray';
	
	h_1.style.backgroundColor='blue';
	h_1.style.textAlign='center';
	for(i=0;i<class_h2.length;i++)
	{
		class_h2[i].style.backgroundColor='palegreen';
		class_h2[i].style.color ='blue';
	}
	
	for(i=0;i<class_h3.length;i++)
	{
		class_h3[i].style.color='blue';
		class_h3[i].style.borderBottom='1px solid blue';
	}
	

}

