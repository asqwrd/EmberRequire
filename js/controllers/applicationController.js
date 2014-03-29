define(["ember"], function(Ember){

	var Applicationcontroller = Ember.ArrayController.extend({
		topNApps: Ember.A(long_short_data),
		encap: Ember.A(encap),
		ipDist: Ember.A(pieData)
  });
	
	return Applicationcontroller;
});

var long_short_data = [ 
			  {
				key: 'Series1',
				color: '#d62728',
				values: [
				  { 
					"label" : "Group A" ,
					"value" : 1.8746444827653
				  } , 
				  { 
					"label" : "Group B" ,
					"value" : 8.0961543492239
				  } , 
				  { 
					"label" : "Group C" ,
					"value" : 0.57072943117674
				  } , 
				  { 
					"label" : "Group D" ,
					"value" : 2.4174010336624
				  } , 
				  {
					"label" : "Group E" ,
					"value" : 0.72009071426284
				  } , 
				  { 
					"label" : "Group F" ,
					"value" : 0.77154485523777
				  } , 
				  { 
					"label" : "Group G" ,
					"value" : 0.90152097798131
				  } , 
				  {
					"label" : "Group H" ,
					"value" : 0.91445417330854
				  } , 
				  { 
					"label" : "Group I" ,
					"value" : 0.055746319141851
				  }
				]
			  }
			];
var encap = [ 
			  {
				key: 'encap',
				color: '#d62728',
				values: [
				  { 
					"label" : "Group A" ,
					"value" : 1.8746444827653
				  } , 
				  { 
					"label" : "Group B" ,
					"value" : 8.0961543492239
				  } , 
				  { 
					"label" : "Group C" ,
					"value" : 0.57072943117674
				  } , 
				 
				]
			  }
			];
var pieData = [
      { 
        "label": "One",
        "value" : 29.765957771107
      } , 
      { 
        "label": "Two",
        "value" : 0
      } , 
      { 
        "label": "Three",
        "value" : 32.807804682612
      } , 
      { 
        "label": "Four",
        "value" : 196.45946739256
      } , 
      { 
        "label": "Five",
        "value" : 0.19434030906893
      } , 
      { 
        "label": "Six",
        "value" : 98.079782601442
      } , 
      { 
        "label": "Seven",
        "value" : 13.925743130903
      } , 
      { 
        "label": "Eight",
        "value" : 5.1387322875705
      }
    ];