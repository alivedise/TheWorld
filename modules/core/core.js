steal( 'the_world/modules/base','the_world/modules/environment' )
	.then( './views/init.ejs', function($){

/**
 * @class TW.Modules.Core
 */
TW.Modules.Base('TW.Modules.Core',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
    TW.Modules.Environment.instance();
	}
})

});
