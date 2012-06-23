steal( 'tw/modules/base' )
	.then( './views/init.ejs', function($){

/**
 * @class TW.Modules.Message
 */
TW.Moduels.Base('TW.Modules.Message',
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
