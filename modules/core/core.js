steal( 'the_world/modules/base' )
	.then( './views/init.ejs', function($){

/**
 * @class TheWorld.Modules.Core
 */
TheWorld.Modules.Base('TheWorld.Modules.Core',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html("//the_world/modules/core/views/init.ejs",{
			message: "Hello World"
		});
	}
})

});
