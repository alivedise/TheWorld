steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'the_world/models' )
.then( './views/init.ejs', 
       './views/seed.ejs', 
       function($){

/**
 * @class TheWorld.Seed.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists seeds and lets you destroy them.
 */
$.Controller('TheWorld.Seed.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html(this.view('init',TheWorld.Models.Seed.findAll()) )
	},
	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.seed').model().destroy();
		}
	},
	"{TheWorld.Models.Seed} destroyed" : function(Seed, ev, seed) {
		seed.elements(this.element).remove();
	},
	"{TheWorld.Models.Seed} created" : function(Seed, ev, seed){
		this.element.append(this.view('init', [seed]))
	},
	"{TheWorld.Models.Seed} updated" : function(Seed, ev, seed){
		seed.elements(this.element)
		      .html(this.view('seed', seed) );
	}
});

});