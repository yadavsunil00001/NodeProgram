
function longComputation () {

	// body...
	var successful=true;
	if(successful){
		myCallBacks.success();
	}
	else
		myCallBacks.failure();
}



var myCallBacks={

success:function () {
	// body...
	console.log("successfull");
	
},
failure: function(){
	console.log("unsuccessfull");

}
}
longComputation(myCallBacks);