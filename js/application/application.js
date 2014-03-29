define([
	"views/ApplicationView",
	"components/barChart",
	"components/pieChart",
	"controllers/ApplicationController",
	"router/router"
], function(ApplicationView, BarChartComponent,PieChartComponent, ApplicationController, Router){
	/*Module Pattern*/
	var App = {
		ApplicationView: ApplicationView,
		BarChartComponent: BarChartComponent,
		PieChartComponent: PieChartComponent,
		ApplicationController: ApplicationController,
		Router: Router,
		rootElement: "#main_content"
	};

	return App;
});