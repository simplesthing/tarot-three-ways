define([
    'require/text!tarot/template/spread.handlebars',
    'ember/load'
], function(spread){
    
    return Ember.View.create({
        template: Ember.Handlebars.compile(spread),
    });
})
