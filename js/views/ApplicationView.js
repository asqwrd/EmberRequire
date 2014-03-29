define([
	"ember",
	"text!templates/applicationTemplate.html","nvd3"
], function(Ember, applicationTemplate) {

	var ApplicationView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(applicationTemplate),
		
		
	});
	return ApplicationView;
});