//js TheWorld/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('TheWorld/the_world.html', {
		markdown : ['the_world']
	});
});