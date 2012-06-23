steal('jquery/model', function(){

/**
 * @class TW.Models.Seed
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend seed services.  
 */
$.Model('TW.Models.Seed',
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