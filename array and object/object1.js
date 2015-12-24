var sayHello={


	inEnglish: function () {
		// body...
		console.log("welcome");
	},
	inHindi:function(){

		console.log("namaste");
	}
}
sayHello.inEnglish();
sayHello["inHindi"]();