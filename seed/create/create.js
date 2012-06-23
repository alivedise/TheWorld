steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'the_world/models' )
	.then('./views/init.ejs', function($){

/**
 * @class TheWorld.Seed.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates seeds
 */
$.Controller('TheWorld.Seed.Create',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	},
	submit : function(el, ev){
		ev.preventDefault();
		this.element.find('[type=submit]').val('Creating...')
		new TheWorld.Models.Seed(el.formParams()).save(this.callback('saved'));
	},
	saved : function(){
		this.element.find('[type=submit]').val('Create');
		this.element[0].reset()
	}
})

});