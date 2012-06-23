steal('funcunit').then(function(){

module("TW.Modules.Notification", { 
	setup: function(){
		S.open("//tw/modules/notification/notification.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "TW.Modules.Notification Demo","demo text");
});


});