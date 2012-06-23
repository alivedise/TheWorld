// map fixtures for this application

steal("jquery/dom/fixture", function(){
	
	$.fixture.make("seed", 5, function(i, seed){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "seed "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
})