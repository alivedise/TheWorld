steal( 'tw/modules/base' )
	.then( './views/init.ejs', function($){

/**
 * @class TW.Modules.Auth
 */
TW.Moduels.Base('TW.Modules.Auth',
/** @Static */
{
	defaults : {},
  onElement : 'body',
  isSingleton : true
},
/** @Prototype */
{
	init : function(){}
})

});
