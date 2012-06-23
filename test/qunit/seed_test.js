steal("funcunit/qunit", "the_world/fixtures", "the_world/models/seed.js", function(){
	module("Model: TheWorld.Models.Seed")
	
	test("findAll", function(){
		expect(4);
		stop();
		TheWorld.Models.Seed.findAll({}, function(seeds){
			ok(seeds)
	        ok(seeds.length)
	        ok(seeds[0].name)
	        ok(seeds[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new TheWorld.Models.Seed({name: "dry cleaning", description: "take to street corner"}).save(function(seed){
			ok(seed);
	        ok(seed.id);
	        equals(seed.name,"dry cleaning")
	        seed.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new TheWorld.Models.Seed({name: "cook dinner", description: "chicken"}).
	            save(function(seed){
	            	equals(seed.description,"chicken");
	        		seed.update({description: "steak"},function(seed){
	        			equals(seed.description,"steak");
	        			seed.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new TheWorld.Models.Seed({name: "mow grass", description: "use riding mower"}).
	            destroy(function(seed){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})