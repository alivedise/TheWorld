steal('funcunit').then(function(){

module("TW.Modules.Base", { 
	setup: function(){
		S.open("//the_world/modules/base/base.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "TW.Modules.Base Demo","demo text");
});


});