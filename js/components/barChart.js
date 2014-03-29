define(["ember","nvd3"], function(Ember) {

	var BarChartComponent = Ember.Component.extend({
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
			var myColors = ["#b8e5f0"];
			d3.scale.myColors = function() {
				return d3.scale.ordinal().range(myColors);
			};
			nv.addGraph(function() {
			  chart = nv.models.multiBarHorizontalChart()
				  .x(function(d) { return d.label })
				  .y(function(d) { return d.value })
				  .margin({top: 30, right: 20, bottom: 50, left: 50})
				  //.showValues(true)
				  .tooltips(false)
				  .barColor(d3.scale.myColors().range())
				  .transitionDuration(250)
				  .stacked(false)
				  .showControls(false);

			  chart.yAxis
				  .tickFormat(d3.format(',.2f'));
				console.log(self.get('elementId'));
			  d3.select('#'+self.get('elementId'))
				  .datum(data)
				  .call(chart);
				  

			  nv.utils.windowResize(chart.update);

			  chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

			  return chart;
			});
		
		
		},
		didInsertElement: function(){
			this.draw();
		}
	
	});
	return BarChartComponent;
});