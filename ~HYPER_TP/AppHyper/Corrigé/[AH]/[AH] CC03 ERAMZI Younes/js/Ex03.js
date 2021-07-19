function Affichage()
{
	class_h2=document.getElementsByClassName('h_2');
	class_h3=document.getElementsByClassName('h_3');
	h_1=document.getElementsByTagName('h1')[0];
	paragraphe = document.getElementsByTagName('p');
	
	
	
	for(i=0;i<class_h2.length;i++)
	{
		val = class_h2[i].textContent;
		class_h2[i].textContent = "Axe " + (i+1) + ": ";
		class_h2[i].style.color ='blue';
		class_h2[i].textContent += val;
		class_h2[i].style.borderBottom='1px solid blue';
	}
	
	for(i=0;i<paragraphe.length;i++)
	{
		paragraphe[i].style.backgroundColor= 'aliceblue';
	}
	
	//h_1.textContent.text-transform= 'uppercase';
	//h_1.text.toUpperCase();
	
	
	
}