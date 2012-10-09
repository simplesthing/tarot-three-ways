define([
	'require/text!tarot/template/deck.handlebars',
	'ember/load'
], function(deck){
	
	return Ember.View.create({
		template: Ember.Handlebars.compile(deck),
		
		somevalue: 'test',
		
		spread:[],
		
		card: [],
		
		click: function(){
            Tarot.deck_view.drawCard();
  		}, 
  		
  		drawCard: function(){
           var card =  Math.floor((Math.random() * 77)+1);
           var len = Tarot.deck_view.spread.length;

           if(Tarot.deck_view.spread.length === 0){
            Tarot.deck_view.pushCard(card, len);

           } else if (Tarot.deck_view.spread.length < 10){
            Tarot.deck_view.fillSpread(card, len)

           } else {
             console.log('you have drawn all your cards')
           }
  		},
  		
  		fillSpread: function(card, len){

          $.each(Tarot.deck_view.spread, function(key, val){
              if(card === val){
                Tarot.deck_view.drawCard();
               }
          });
          
          Tarot.deck_view.pushCard(card, len);
  		},
  		
  		pushCard: function(card, len){
  		    Tarot.deck_view.spread[len]= card;
  		    Tarot.deck_controller.set('selected', Tarot.deck_controller.get('content').objectAt(card))
  		    Tarot.spread_controller.insertCard(len);
  		}

	});
});
