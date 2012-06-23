steal( 'tw/modules/base','tw/modules/environment','tw/modules/auth','tw/modules/layout','tw/modules/message','tw/modules/notification' )
	.then( function($){

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
