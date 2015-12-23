
console.log("foo has not been called yet");
var foo=function() {
	console.log("called");

	// body...
}
foo();
console.log("foo called");
