steal('funcunit').then(function(){

module("TW.Modules.Auth", { 
	setup: function(){
		S.open("//tw/modules/auth/auth.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "TW.Modules.Auth Demo","demo text");
});


});