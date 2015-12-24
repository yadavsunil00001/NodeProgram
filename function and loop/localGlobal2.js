
function sayHello () {
	output="hello sunil"; //THis variable is not local variable, it become global variable;
    // var output="hello sunil"
	// body...
	// if you want to declare local variable inside a function always use the keyword "var"
	console.log(output);
	sayGoodBye();
}
function sayGoodBye () {
	// body...
	console.log(output);

}
sayHello();