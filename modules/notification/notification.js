steal( 'tw/modules/base' )
	.then( './views/init.ejs', function($){

/**
 * @class TW.Modules.Notification
 */
TW.Moduels.Base('TW.Modules.Notification',
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
