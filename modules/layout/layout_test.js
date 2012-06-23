steal('funcunit').then(function(){

module("TW.Modules.Layout", { 
	setup: function(){
		S.open("//tw/modules/layout/layout.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "TW.Modules.Layout Demo","demo text");
});


});