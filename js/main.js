(function(root){
	require(["config"], function(config){
		requirejs.config(config);
		require(["App","ember","foundation","slickNav","foundation.offcanvas","foundation.topbar"],function(App, Ember,foundation){
			var app_name = config.app_name || "App";
			root[app_name] = App = Ember.Application.create(App);
			$(document).foundation();
		
		$('#analyze').slicknav({label:"Analyze"});
		$('#monitor').slicknav({label:"Monitor"});
		});
	});
})(this);