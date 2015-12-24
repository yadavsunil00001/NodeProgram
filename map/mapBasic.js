var ages=[10,20,30,40,50];
function map(array,action){

   var newarray=[];
	for (var i = 0; i <array.length; i++) {
		var item=array[i];
		var result=action(item);
		newarray[i]=result;
	}
	return newarray;

}

var newages=map(ages,function (item) {
	// body...
	return item+1;
});

var hello=map(ages,function  (argument) {
	// body...
	return argument*10;
})
console.log(hello);
console.log(newages);