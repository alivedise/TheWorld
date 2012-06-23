steal(
	'./the_world.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	'the_world/seed/create',
	'the_world/seed/list',
	function(){					// configure your application
    TheWorld.Modules.Core.instance();
})
