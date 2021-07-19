nomImage = "pic_bulboff";

function init()
{
	document.image_1.src = "img/" + nomImage + ".gif";
	document.image_1.style = "border : 1px solid blue";
}

function changerImage()
{
	if (nomImage == "pic_bulboff")
		nomImage = "pic_bulbon";
	else
		nomImage = "pic_bulboff";
		
	document.image_1.src = "img/" + nomImage + ".gif";
}