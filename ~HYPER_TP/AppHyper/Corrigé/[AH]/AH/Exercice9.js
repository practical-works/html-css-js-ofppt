d = new Date();
s=d.getSeconds();
	h==d.getHours();
m= d.getMinutes();
function Temps()
{
	
		
		  // alert(d.toUTCString());
		// alert(d.toLocaleDateString());
		
		
		
			if(s<59)
			{
			
				s+=1;
				
			}
			else if(s==59)
			{
				s=0;
				
			}
			// else if(m!=60)
				// {
					// m+=1;
				// }
				// else
				// {
					// m=0;
					// if(h!=24)
					// {
						// h+=1;
					// }
					// else h=0;
				// }
			
						

		document.getElementById("Text_1").value=s;
		
		
}

function Initialiser()
{
	var timer;
	document.getElementById("Text_1").value=d.getHours()+' : '+ d.getMinutes()+' : '+d.getSeconds();
	timer = setInterval('Temps()',1000);

}