define([
	'tarot/view/deck',
	'tarot/controller/deck',
	'tarot/view/spread',
	'tarot/controller/spread',
	'ember/load'
], function(deckView, deckCtr, spreadView, spreadCtrl){
	
	return Ember.Object.create({
		childViews: null,
		
		deck: [],
		
		setup: function(){
            //create ArrayProxy for deck of cards 
            Tarot.set('deck_controller', deckCtr.create());
            
            //create a view for the deck - the dealing card
            Tarot.set('deck_view', deckView);
            Tarot.deck_view.appendTo(Tarot.rootElement);
            
            //setup the spread controller
            Tarot.set('spread_controller', spreadCtrl.create());
            Tarot.set('spread_view', spreadView);
            Tarot.spread_view.appendTo(Tarot.rootElement)
            
		}
		
	});

})
