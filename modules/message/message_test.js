steal('funcunit').then(function(){

module("TW.Modules.Message", { 
	setup: function(){
		S.open("//tw/modules/message/message.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "TW.Modules.Message Demo","demo text");
});


});