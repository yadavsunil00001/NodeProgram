function sayhello (name) {
	// body...
	var output="hello "+name;
	console.log(output);
}

function sayGoodBye(name,a,b){
	var output ='goodbye ' +name;
	sayhello(name);
	console.log(output);
	return function whatsap(a,b){

		console.log("take your whatup and your sum is " +(a+b));
	}
}
var whatap=sayGoodBye("sunil",3,4);