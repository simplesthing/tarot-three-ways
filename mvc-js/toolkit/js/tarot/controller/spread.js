define([
	'ember/load'	
], function(){
    
    var spreadCtrl = Ember.Object.extend({
        situation: null,
        challenge: null,
        foundation: null,
        higher_power: null,
        past: null,
        future: null,
        blocks: null,
        influences: null,
        hope_fear: null,
        outcome: null,
        
        insertCard: function(len){
            switch(len){
                case 0:
                    Tarot.spread_controller.set('situation', Tarot.deck_controller.get('selected'));
                    var meaning = Tarot.spread_controller.get('situation');
                    console.log(meaning.situation)
                    break;
                case 1:
                    Tarot.spread_controller.set('challenge', Tarot.deck_controller.get('selected'));
                    var meaning = Tarot.spread_controller.get('challenge');
                    console.log(meaning.challenge)
                    break;
                case 2:
                    Tarot.spread_controller.set('foundation', Tarot.deck_controller.get('selected'));
                    var meaning = Tarot.spread_controller.get('foundation');
                    console.log(meaning.foundation)
                    break;
                case 3:
                    Tarot.spread_controller.set('higher_power', Tarot.deck_controller.get('selected'));
                    var meaning = Tarot.spread_controller.get('higher_power');
                    console.log(meaning.higher_power)
                    break;
                case 4:
                Tarot.spread_controller.set('past', Tarot.deck_controller.get('selected'));
                    var meaning = Tarot.spread_controller.get('past');
                    console.log(meaning.past)
                    break;
                case 5:
                Tarot.spread_controller.set('future', Tarot.deck_controller.get('selected'));
                    var meaning = Tarot.spread_controller.get('future');
                    console.log(meaning.future)
                    break;
                case 6:
                    Tarot.spread_controller.set('blocks', Tarot.deck_controller.get('selected'));
                    var meaning = Tarot.spread_controller.get('blocks');
                    console.log(meaning.blocks)
                    break;
                case 7:
                    Tarot.spread_controller.set('influences', Tarot.deck_controller.get('selected'));
                    var meaning = Tarot.spread_controller.get('influences');
                    console.log(meaning.influences)
                    break;
                case 8:
                    Tarot.spread_controller.set('hope_fear', Tarot.deck_controller.get('selected'));
                    var meaning = Tarot.spread_controller.get('hope_fear');
                    console.log(meaning.hope_fear)
                    break;
                case 9:
                    Tarot.spread_controller.set('outcome', Tarot.deck_controller.get('selected'));
                    var meaning = Tarot.spread_controller.get('outcome');
                    console.log(meaning.outcome)
                    break;
            }
        }
    });
    
    return spreadCtrl
})
