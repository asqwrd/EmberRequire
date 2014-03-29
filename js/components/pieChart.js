define(["ember","nvd3"], function(Ember) {

	var PieChartComponent = Ember.Component.extend({
		tagName: 'svg',
		attributeBindings: 'width height'.w(),
		margin: {top: 20, right: 20, bottom: 30, left: 40},
		
		w: function(){
		  return this.get('width') - this.get('margin.left') - this.get('margin.right');
		}.property('width'),
	  
		h: function(){
		  return this.get('height') - this.get('margin.top') - this.get('margin.bottom');
		}.property('height'),  
	  
		transformG: function(){
		  return "translate(" + this.get('margin.left') + "," + this.get('margin.top') + ")";
		}.property(),
		  
		transformX: function(){
		  return "translate(0,"+ this.get('h') +")";
		}.property('h'),
		
		draw: function(){
			var data = this.get('data');
			var self = this;
			var chart;
			var pieColors = ["#b8e5f0",'#9A9A9A',"#cfe576", "#ff9854", "#fcdc89", "#e2e0e0", "#dae8f6", "#f08058", "#66b6d4"];
			d3.scale.pieColors = function() {
				return d3.scale.ordinal().range(pieColors);
			};
			nv.addGraph(function() {
			  chart = nv.models.pieChart()
				  .x(function(d) { return d.label })
				  .y(function(d) { return d.value })
				   .color(d3.scale.pieColors().range())
				  .showLabels(false);

				d3.select('#'+self.get('elementId'))
					.datum(data)
					.transition().duration(1200)
					.call(chart);

			  return chart;
			});
		
		
		},
		didInsertElement: function(){
			this.draw();
		}
	
	});
	return PieChartComponent;
});