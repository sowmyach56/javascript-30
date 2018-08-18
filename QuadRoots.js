		var a = prompt("Enter value of a","1");
		var b = prompt("Enter value of b","4");
		var c = prompt("Enter value of c","4");
 
		var root = Math.sqrt(b * b - 4 * a * c);
		var denom = 2 * a;
 
		var r1 = ( -b + root ) / denom;
		var r2 = ( -b - root ) / denom;
 
		document.write("1st root: "+r1+"<br />");
		document.write("2nd root: "+r2+"<br />");