steal('funcunit').then(function(){

module("TheWorld.Modules.Core", { 
	setup: function(){
		S.open("//the_world/modules/core/core.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "TheWorld.Modules.Core Demo","demo text");
});


});