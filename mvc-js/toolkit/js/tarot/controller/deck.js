define([
	'tarot/model/card',
	'tarot/controller/card',
	'tarot/view/card',
	'ember/load'
], function(cardModel, cardCtrl, cardView){
	
	var deckCtr = Ember.ArrayProxy.extend({
		
		content: [],
		
		selected: null,
		
		init: function(){
			Tarot.set('card_model', cardModel);
			Tarot.set('card_controller', cardCtrl);
            Tarot.set('card_view', cardView);
			this.loadDeck();
		},
		
		loadDeck: function(){
            //load XML data
			$.getJSON('../toolkit/data/data.json', function(data){
				
				$.each(data.cards, function(key, val){
					var card = Tarot.card_model.create({
						index: val.index,
						arcana: val.arcana,
						number: val.number,
						type: val.number,
						element: val.element,
						name: val.name,
						color: val.color,
						hex: val.hex,
						image: val.image,
						situation: val.situation,
						challenge: val.challenge,
						higher_power: val.higher_power,
						foundation: val.foundation,
						past: val.past,
						future: val.past,
						blocks: val.blocks,
						influences: val.influences,
						hope_fear: val.hope_fear,
						outcome: val.outcome
					});
					//console.log(card.index)
					Tarot.main_controller.deck.push(card);
				});
				
			}).then(function(){
				Tarot.deck_controller.set('content', Tarot.main_controller.deck);
			});
		}	
		
	});
	
	return deckCtr
})
