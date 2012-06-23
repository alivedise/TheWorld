steal('funcunit').then(function(){

module("TW.Modules.Core", { 
	setup: function(){
		S.open("//the_world/modules/core/core.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "TW.Modules.Core Demo","demo text");
});


});