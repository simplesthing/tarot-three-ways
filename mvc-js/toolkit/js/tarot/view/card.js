define([
	'ember/load'
], function(){
	
	var cardView = Ember.View.extend({
	    
	   classNameBindings: 'isSelected',
	   
	   isSelected: function(){
	       return Tarot.deck_controller.get('selected') == this.get('content')
	   }.property('Tarot.deck_controller.selected')
	});
	
	return cardView
})
