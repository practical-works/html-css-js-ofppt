function Verifier()
{
	
	var arr = document.form_1.text_1.value.split("");
	var carc = document.form_1.text_2.value;
	var i , c = 0;
	
	for(i=0;i<arr.length;i++)
	{
		if(arr[i] == carc) c++;
	}
	alert(c + ' occurence');
	
	
}