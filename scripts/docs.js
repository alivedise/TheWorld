//js tw/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('tw/the_world.html', {
		markdown : ['the_world']
	});
});