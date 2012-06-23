steal('jquery/model', function(){

/**
 * @class TheWorld.Models.Seed
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend seed services.  
 */
$.Model('TheWorld.Models.Seed',
/* @Static */
{
	findAll: "/seeds.json",
  	findOne : "/seeds/{id}.json", 
  	create : "/seeds.json",
 	update : "/seeds/{id}.json",
  	destroy : "/seeds/{id}.json"
},
/* @Prototype */
{});

})