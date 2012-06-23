steal( 'tw/modules/base' )
	.then( './views/init.ejs', function($){

/**
 * @class TW.Modules.Layout
 */
TW.Moduels.Base('TW.Modules.Layout',
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
