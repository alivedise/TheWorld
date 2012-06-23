steal('funcunit').then(function(){

module("TW.Modules.Environment", { 
	setup: function(){
		S.open("//the_world/modules/environment/environment.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "TW.Modules.Environment Demo","demo text");
});


});