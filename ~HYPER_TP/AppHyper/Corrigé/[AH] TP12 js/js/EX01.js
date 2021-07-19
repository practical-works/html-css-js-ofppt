function Verifier() 
{
	hf
	var chaine = document.form_1.text_1.value;
    var array  = chaine.split("") , i;
	
	 for( i = 0 ;i < array.length ;i++ )
	 {
		 if(!isNaN(parseInt(array[i])))
		 {
			 alert('Centient un numero');
			 return;;
		 }
	 }
        
	 alert('pas de numero dans cette chaine');
	 // if(!isNaN(parseInt(chaine))) alert('contient');
	 // else alert('contient pas');
	
	// alert(parseInt(chaine));
}