document.write("<h2>La boucle for ... </h2>");

document.write("<p>");
for(i = 1; i <= 10; i++)
{
	document.write(i + " - ");
}
document.write("</p>");

/*-----------------------------------------------------------------*/

document.write("<h2>La boucle do ... while </h2>");

i = 10;
document.write("<p>");
do
{
	document.write(i + " - ");
	i--;
}while(i >= 1);
document.write("</p>");

/*-----------------------------------------------------------------*/

document.write("<h2>La boucle while ... </h2>");

i = 1;
document.write("<p>");
do
{
	document.write(i + " - ");
	i += 2;
}while(i <= 20);
document.write("</p>");