steal( 'jquery/controller','jquery/view/ejs','jquery/controller/subscribe' )
	.then( './views/init.ejs', function($){

/**
 * @class TheWorld.Modules.Base
 */
$.Controller('TheWorld.Modules.Base',
/** @Static */
{
  defaults : {},

  // indicate where this module is living in the dom.
  // supposed to be document, body, or ID.
  onElement : 'body',

  // indicate if this module is singleton in web life cycle.
  isSingleton : true,

  // instanciation. return instance if singleton
  instance: function base_instance(settings) {
    if (this.isSingleton) {
      if (this.onElement &&
        $(this.onElement).data('controllers')[this.fullName]) {
        return $(this.onElement).data('controllers')[this.fullName];
      } else {
        return new this(this.onElement, settings);
      }
    } else {
      return new this(this.onElement, settings);
    }
  },

  viewPath: function base_viewPath(){
    return this.fullName.replace('.', '/');
  }
},
/** @Prototype */
{
	init : function(settings) {
		this.element.html("//the_world/modules/base/views/init.ejs",{
			message: "Hello World"
		});
	}
})

});
