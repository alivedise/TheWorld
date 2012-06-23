steal("funcunit", function(){
	module("the_world test", { 
		setup: function(){
			S.open("//TheWorld/the_world.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})