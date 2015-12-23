function foo (a,b,c) {
	console.log("foo called " + (a+c));
	bar(b);
	// body...
}

function bar(c){

	console.log("bar called " +c);
}
foo(1,2,3);