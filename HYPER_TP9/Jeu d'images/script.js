var InterID = 0;
function switch(A, B) {
	var tmp = A;
	A = B;
	B = tmp;
}
function switchImges() {
	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var img_src = img1.src;
	switch(img1, img2);

	
}
function start(){
	InterID = setInterval(switchImges, 170);
}
function stop() {
	clearInterval(InterID);
}