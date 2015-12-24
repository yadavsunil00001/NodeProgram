function forEach (array,action) {
	// body...
	for (var i = array.length - 1; i >= 0; i--) {
		action(array[i]);
	}
}

var array=[0,1,2,3,4,5,6,7,8,9];
var name=["sunil","amit","rajesh"];
forEach(array,function (item) {
	// body...
	var hello=(item+1)*100;
	console.log(hello);
});

forEach(name,function (item) {
	// body...
	console.log(item);
});