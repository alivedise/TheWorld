steal('funcunit',function(){

module("TheWorld.Seed.List", { 
	setup: function(){
		S.open("//the_world/seed/list/list.html");
	}
});

test("delete seeds", function(){
	S('#create').click()
	
	// wait until grilled cheese has been added
	S('h3:contains(Grilled Cheese X)').exists();
	
	S.confirm(true);
	S('h3:last a').click();
	
	
	S('h3:contains(Grilled Cheese)').missing(function(){
		ok(true,"Grilled Cheese Removed")
	});
	
});


});