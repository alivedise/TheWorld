steal('funcunit').then(function(){

module("TheWorld.Modules.Base", { 
	setup: function(){
		S.open("//the_world/modules/base/base.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "TheWorld.Modules.Base Demo","demo text");
});


});