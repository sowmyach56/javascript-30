function func() {
	var arr = [];
	for (var i = 1; i <= mynumber; i++) {
		arr.push(""+i);
	}
    document.write(arr.sort());
    document.write("<br>");
    document.write(arr);
}
func();