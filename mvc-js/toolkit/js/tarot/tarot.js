define([
	'tarot/controller/main',
	'ember/load'
], function(mainCtr){
	
	var link = document.createElement('link');
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = "../toolkit/css/tarot/tarot.css";
	document.getElementsByTagName('head')[0].appendChild(link);
	
	Tarot = Ember.Application.create({
		rootElement:"#ROTA"
	});
	
	Tarot.set('main_controller', mainCtr);
	Tarot.main_controller.setup();

	Ember.Tarot = Tarot;	
	
	return Tarot
})
