var a = 0;
var b = 1;
var c;
 
var num = prompt("Enter the limit to generate fibonacci no",0);
 
document.write(a+"<br />");
document.write(b+"<br />");
 
for(var i=3; i <= num;i++)
{
	c = a + b;
	a = b;
	b = c;
 
	document.write(var3+"<br />");
}